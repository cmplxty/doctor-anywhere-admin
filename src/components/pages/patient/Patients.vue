<template>
    <div class="col-sm-12">
        <section class="panel">
            <div class="panel-body">
                <div class="adv-table editable-table ">
                    <div class="clearfix">
                        <div class="btn-group">
                            <button id="editable-sample_new" class="btn btn-primary">
                                Add New <i class="fa fa-plus"></i>
                            </button>
                        </div>
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
                    <div class="space15"></div>
                    <table class="table table-striped table-hover table-bordered" id="editable-sample">
                        <thead>
                        <tr>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(patient, index) in patients" v-bind:key="index">
                                <td>
                                    <img src="https://previews.123rf.com/images/jemastock/jemastock1610/jemastock161002019/63603623-patient-sick-man-avatar-icon-medical-and-health-care-theme-colorful-design-vector-illustration.jpg" alt="" class="img-responsive">
                                </td>
                                <td>
                                    <a href="#" style="color: #000">{{ patient.name }}</a>
                                </td>
                                <td class="center">{{ patient.email }}</td>
                                <td class="text-center">
                                    <a class="btn btn-sm btn-success" @click="apatient=patient" data-toggle="modal" data-target="#myModal" href="javascript:;">Details</a>
                                    <a style="margin-right: 5px; margin-left: 5px;" class="btn btn-sm btn-primary" href="javascript:;">Edit</a>
                                    <a class="btn btn-sm btn-danger" href="javascript:;">Delete</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" v-if="apatient.name">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                                    <h4 class="modal-title" id="myModalLabel">Patient Details</h4>
                                </div>
                                <div class="modal-body">
                                    <div class="donor-profile">
                                        <div class="donor-img text-center">
                                            <img src="https://i.imgur.com/I80W1Q0.png" class="upload-preview">
                                        </div>
                                        <div class="personal-info text-center">
                                            <h3>{{ apatient.name }}</h3>
                                            <p>{{ apatient.phone }}</p>
                                            <p><strong>{{ apatient.specialist }}</strong></p>
                                        </div>
                                        <div class="address text-center">
                                            <p><strong>Phone Number :</strong> {{ apatient.phone }}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { dbPatientRef } from '../../../../firebase.js';
export default {
    data () {
        return {
            patients: [],
            loaded: false,
            apatient: {}
        };
    },
    mounted() {
        this.getDoctos();
    },
    methods: {
        getDoctos() {
            dbPatientRef.once('value')
                .then((snapshot) => {
                    snapshot.forEach((data) => {
                        this.patients.push(data.val());
                    });
                    this.loaded = true;
                }).catch((error) => {
                        console.log(error);
                    }
                )
        }
    }
};
</script>

<style scoped>
img {
    height: 100px;
    width: 100px;
}
</style>
