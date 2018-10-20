<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
import { dbAdminRef } from '../firebase.js';
export default {
    name: 'app',
    data() {
        return {
            data: []
        }
    },
    mounted() {
        //this.all();
    },
    methods: {
        all(){
            dbAdminRef.once('value').then((data) => {
                const objects = data.val()
                for (let key in objects) {
                    console.log(key)
                }
            }).catch((error) => {
                    console.log(error)
                }
            )
        }
    }
}
</script>