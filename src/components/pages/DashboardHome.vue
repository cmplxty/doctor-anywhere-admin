<template>
    <div class="col-md-12">
        <!--statistics start-->
        <div class="row state-overview">
            <div class="col-md-6 col-xs-12 col-sm-6">
                <div class="panel purple">
                    <div class="symbol">
                        <i class="fa fa-gavel"></i>
                    </div>
                    <div class="state-value">
                        <div class="value">{{ totalDoctors }}</div>
                        <div class="title">Doctors</div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-xs-12 col-sm-6">
                <div class="panel red">
                    <div class="symbol">
                        <i class="fa fa-tags"></i>
                    </div>
                    <div class="state-value">
                        <div class="value">{{ totalPatients }}</div>
                        <div class="title">Patients</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row state-overview">
            <div class="col-md-6 col-xs-12 col-sm-6">
                <div class="panel blue">
                    <div class="symbol">
                        <i class="fa fa-money"></i>
                    </div>
                    <div class="state-value">
                        <div class="value">0</div>
                        <div class="title"> Total Revenue</div>
                    </div>
                </div>
            </div>
            <div class="col-md-6 col-xs-12 col-sm-6">
                <div class="panel green">
                    <div class="symbol">
                        <i class="fa fa-eye"></i>
                    </div>
                    <div class="state-value">
                        <div class="value">0</div>
                        <div class="title"> Unique Visitors</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { dbDoctorRef, dbPatientRef } from '../../../firebase.js';
export default {
    data() {
        return {
            totalDoctors: 0,
            totalPatients: 0,
            totalRequestedDoctors: 0
        }
    },
    mounted() {
        this.getTotalDoctors();
        this.getTotalPatients();
    },
    methods: {
        getTotalDoctors() {
            let self = this;
            dbDoctorRef.on("value", function(snapshot) {
                self.totalDoctors = snapshot.numChildren();
            });
        },
        getTotalPatients() {
            let self = this;
            dbPatientRef.on("value", function(snapshot) {
                self.totalPatients = snapshot.numChildren();
            });
        }
    }
}
</script>

