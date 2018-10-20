<template>
    <div class="col-sm-12">
        <section class="panel">
            <div class="panel-body">
                <div class="adv-table editable-table ">
                    <div class="clearfix">
                        <div class="btn-group pull-right">
                            <button class="btn btn-default dropdown-toggle" data-toggle="dropdown">Tools <i class="fa fa-angle-down"></i>
                            </button>
                            <ul class="dropdown-menu pull-right">
                                <li><a href="#">Print</a></li>
                                <li><a href="#">Save as PDF</a></li>
                                <li><a href="#">Export to Excel</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="space"></div>
                    <table class="table table-striped table-hover table-bordered" id="data-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Degree</th>
                                <th>Address</th>
                                <td>Phone</td>
                                <th>Registraion Number</th>
                                <th colspan="2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(doctor, index) in doctors" :key="index">
                                <td>{{ doctor.name }}</td>
                                <td>{{ doctor.email }}</td>
                                <td>{{ doctor.degree }}</td>
                                <td>{{ doctor.address }}</td>
                                <td>{{ doctor.phone }}</td>
                                <td class="center">{{ doctor.registration }}</td>
                                <td v-if="doctor.status == 'accepted'">Accepted</td>
                                <td v-else>
                                    <a @click="acceptDoctor(index)" class="btn btn-success">Accept</a>
                                </td>
                                <div v-if="doctor.status != 'accepted'">
                                    <td v-if="doctor.status == 'rejected'">Rejected</td>
                                    <td v-else>
                                        <a @click="rejectDoctor(index)" class="btn btn-danger" href="javascript:;">Delete</a>
                                    </td>
                                </div>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { dbRequestedDoctorsRef, dbDoctorRef } from '../../../firebase.js';
import firebase from 'firebase';
export default {
    data () {
        return {
            doctors: [],
            doctor: {}
        };
    },
    mounted() {
        this.getRequestedDoctors();
    },
    methods: {
        getRequestedDoctors() {
             dbRequestedDoctorsRef.once('value').then((data) => {
                this.doctors = data.val();
                //Object.keys(data.val());
                }).catch((error) => {
                        console.log(error);
                        return false;
                    }
                )
        },
        acceptDoctor(index){
            if(confirm('Are you sure?')){
                this.doctor = this.doctors[index];
                let password = Math.random().toString(36).substring(2, 8);
                firebase.auth().createUserWithEmailAndPassword(this.doctor.email, '123123')
                        .then(res => {
                            //this.doctor.status = 'accepted';
                            this.doctor.about = "I am good doctor";
                            this.doctor.city  = "Dhaka";
                            this.doctor.country = "Bangladesh";
                            dbDoctorRef.child(res.user.uid).set(this.doctor);
                            dbRequestedDoctorsRef.child(index).update(this.doctor);
                        })
                        .catch(err => console.log(err));
            }
        },
        rejectDoctor(index){
            
        }
    }
};
</script>
