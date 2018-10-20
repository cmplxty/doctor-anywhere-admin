import Dashboard from './components/pages/Dashboard.vue';
import DashboardHome from './components/pages/DashboardHome.vue';
import Doctors from './components/pages/Doctors.vue';
import DoctorProfile from './components/pages/DoctorProfile.vue';
import Patients from './components/pages/patient/Patients.vue';
import WaitingDoctors from './components/pages/WaitingDoctors.vue';
import WrongPage from './components/pages/WrongPage.vue';
import Login from './components/auth/Login.vue';
import VueRouter from 'vue-router';

const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: { title: 'Login' }
    },
    {
        path: '/admin',
        component: Dashboard,
        children: [
            {
                path: '',
                component: DashboardHome,
                name: 'dashboard',
                meta: { title: "Admin Dashboard" },
            },
            {
                path: 'doctors',
                component: Doctors,
                name: 'doctors',
                meta: { title: "All Doctors" },
            },
            {
                path: 'doctors/:id',
                component: DoctorProfile,
                meta: { title: "Doctor profile" },
            },
            {
                path: 'patients',
                component: Patients,
                name: 'patients',
                meta: { title: "All Patients" },
            },
            {
                path: 'waiting-doctors',
                component: WaitingDoctors,
                name: 'waiting-doctors',
                meta: { title: "Requested doctors" },
            },
        ]
    },
    {
        path: '*',
        component: WrongPage,
        redirect: '/login'
    },
];

export const router = new VueRouter({
    linkActiveClass: "active",
    linkExactActiveClass: "active",
    routes,
    mode: 'history',
});