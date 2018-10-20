import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from 'firebase';
import { dbAdminRef } from '../../firebase';
import {router} from '../routes';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        admin: null,
        loading: false,
        error: null
    },
    mutations: {
        setAdmin (state, payload) {
            state.admin = payload;
        },
        setLoading (state, payload) {
            state.loading = payload;
        },
        setError (state, payload) {
            state.error = payload;
        },
        clearError (state) {
            state.error = null;
        }
    },
    actions: {
        signAdminIn ({commit}, payload) {
            commit('setLoading', true)
            commit('clearError')
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                .then(res => {
                    dbAdminRef.once('value').then((data) => {
                        const objects = data.val()
                        for (let key in objects) {
                            if(res.user.uid == key) {
                                break;
                            }
                        }
                        localStorage.setItem('doctor-admin', JSON.stringify(res.user));
                        commit('setLoading', false);
                        commit('setAdmin', res.user);
                        router.push('/admin')
                        }).catch((error) => {
                                console.log(error);
                                return false;
                            }
                        )
                    }
              )
              .catch(
                    error => {
                        commit('setLoading', false);
                        commit('setError', error);
                        console.log(error);
                    }
                )
        },
        logout ({commit}) {
            firebase.auth().signOut();
            commit('setAdmin', null);
            localStorage.removeItem('doctor-admin');
            router.push('/login');
        },
    },
    getters: {
        admin(state){
            return JSON.parse(localStorage.getItem('doctor-admin'));
        }
    }
})