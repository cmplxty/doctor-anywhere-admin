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
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Specialist</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(doctor, index) in doctors" v-bind:key="index">
                                <td>
                                    <img src="https://cdn4.iconfinder.com/data/icons/professions-1-2/151/3-512.png" alt="" class="img-responsive">
                                </td>
                                <td>
                                    <a href="#" style="color: #000">{{ doctor.name }}</a>
                                </td>
                                <td>{{ doctor.phone }}</td>
                                <td class="center">{{ doctor.email }}</td>
                                <td class="center">{{ doctor.specialist }}</td>
                                <td class="text-center">
                                    <a class="btn btn-sm btn-success" @click="adoctor=doctor" data-toggle="modal" data-target="#myModal" href="javascript:;">Details</a>
                                    <a style="margin-right: 5px; margin-left: 5px;" class="btn btn-sm btn-primary" href="javascript:;">Edit</a>
                                    <a class="btn btn-sm btn-danger" href="javascript:;">Delete</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" v-if="adoctor.name">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                                    <h4 class="modal-title" id="myModalLabel">Doctor Details</h4>
                                </div>
                                <div class="modal-body">
                                    <div class="donor-profile">
                                        <div class="donor-img text-center">
                                            <img src="https://i.imgur.com/I80W1Q0.png" class="upload-preview">
                                        </div>
                                        <div class="personal-info text-center">
                                            <h3>{{ adoctor.name }}</h3>
                                            <p>{{ adoctor.phone }}</p>
                                            <p><strong>{{ adoctor.specialist }}</strong></p>
                                        </div>
                                        <div class="address text-center">
                                            <p><strong>Phone Number :</strong> {{ adoctor.phone }}</p>
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
import { dbDoctorRef } from '../../../firebase.js';
export default {
    data () {
        return {
            doctors: [],
            loaded: false,
            adoctor: {}
        };
    },
    mounted() {
        this.getDoctos();
    },
    methods: {
        getDoctos() {
            dbDoctorRef.once('value')
                .then((snapshot) => {
                    snapshot.forEach((data) => {
                        this.doctors.push(data.val());
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
