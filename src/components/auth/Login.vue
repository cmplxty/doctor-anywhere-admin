<template>
    <div class="login-body">
        <div class="container">
            <form class="form-signin" v-on:submit.prevent="onSubmit">
                <div class="form-signin-heading text-center">
                    <h1 class="sign-title">Sign In</h1>
                    <img src="../../assets/images/login-logo.png" alt=""/>
                </div>
                <div class="login-wrap">
                    <div v-if="hasError">
                        {{ errorMessage }}
                    </div>
                    <br>
                    <div class="form-group" :class="{ 'has-error': errors.has('email') }">
                        <input
                            type="email"
                            name="email"
                            v-validate="'required|email'"
                            class="form-control" 
                            v-model="email" 
                            placeholder="Email" autofocus>
                        <span class="help-block" v-show="errors.has('email')">{{ errors.first('email') }}</span>
                    </div>
                    <div class="form-group" :class="{ 'has-error': errors.has('password') }">
                        <input 
                            type="password"
                            name="password"
                            v-validate="'required'"
                            class="form-control" 
                            v-model="password" 
                            placeholder="Password">
                        <span class="help-block" v-show="errors.has('password')">{{ errors.first('password') }}</span>
                    </div>
                    <div class="form-group">
                        <input 
                            class="btn btn-lg btn-login btn-block" 
                            type="submit" 
                            value="Login"/>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            email: '',
            password: '',
            hasError: false,
            errorMessage: ''
        }
    },
    methods: {
        onSubmit() {
            this.$store.dispatch('signAdminIn', {email: this.email, password: this.password})
        }
    }
}
</script>

