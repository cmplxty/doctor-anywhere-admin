<template>
    <ul class="nav nav-pills nav-stacked custom-nav">
        <li :class="getActiveClass('dashboard')">
            <a href="/admin"><i class="fa fa-home"></i> <span>Dashboard</span></a>
        </li>
        <li class="menu-list" :class="getActiveClass('doctors')">
            <a href="#"><i class="fa fa-laptop"></i> 
                <span>Doctors</span>
            </a>
            <ul class="sub-menu-list">
                <li>
                    <router-link to="/admin/doctors">All Doctors</router-link>
                </li>
            </ul>
        </li>
        <li class="menu-list" :class="getActiveClass('patients')">
            <a href="#"><i class="fa fa-laptop"></i> 
                <span>Patients</span>
            </a>
            <ul class="sub-menu-list">
                <li>
                    <router-link to="/admin/patients">All Patients</router-link>
                </li>
            </ul>
        </li>
        <li>
            <a href="/admin/waiting-doctors">
                <i class="fa fa-puzzle-piece"></i><span>Requested Doctors</span>
            </a>
        </li>
    </ul>
</template>
<script>
  export default {
    name: 'app-drawer',
    data: () => ({
        
    }),
    mounted() {
        
    },
    methods: {
        getActiveClass(currentRoute) {
            return this.$router.currentRoute.name === currentRoute ? 'active': '';
        },
        onClickList() {
            
        }
    }
  }
</script>