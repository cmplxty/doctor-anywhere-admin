<template>
    <div class="sticky-header">
        <section>
            <!-- left side start-->
            <div class="left-side sticky-left-side">

                <!--logo and iconic logo start-->
                <div class="logo">
                    <a href="/admin" class="text-center">Admin</a>
                </div>

               <div class="logo-icon text-center">
                    <a href="index.html"><img src="images/logo_icon.png" alt=""></a>
                </div>
                <!--logo and iconic logo end-->

                <div class="left-side-inner">

                    <!--sidebar nav start-->
                    <app-drawer/>
                    <!--sidebar nav end-->

                </div>
            </div>
            <!-- left side end-->
            
            <!-- main content start-->
            <div class="main-content" >

                <!-- header section start-->
                <app-toolbar/>
                <!-- header section end-->

                <!-- page heading start-->
                <!-- <div class="page-heading">
                    <h3>
                        Dashboard
                    </h3>
                </div> -->
                <!-- page heading end-->

                <!--body wrapper start-->
                <div class="wrapper">
                    <div class="row">
                        <router-view></router-view>
                    </div>
                </div>
                <footer>
                    2018 &copy; Admin Dashboard
                </footer>
            </div>
        </section>
    </div>
</template>
<script>

import DashboardHome from './DashboardHome';
import AppDrawer from '@/components/AppDrawer';
import AppToolbar from '@/components/AppToolbar';

    export default {
        data: () => ({
            
        }),
        components: {
            AppDrawer,
            AppToolbar
        }
    }
</script>