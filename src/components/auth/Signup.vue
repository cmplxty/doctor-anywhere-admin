<template>
    <v-content>
        <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <v-flex xs12 sm8 md6 lg5>
                    <v-card class="elevation-1 pa-1">
                        <v-card-text>
                            <div class="layout column align-center">
                                <h1 class="flex my-4 primary--text">Signup</h1>
                            </div>
                            <v-form>
                                <v-text-field 
                                    append-icon="person" 
                                    name="name" 
                                    label="Name" 
                                    type="text"/>
                                <v-text-field 
                                    append-icon="email" 
                                    name="email" 
                                    label="Email" 
                                    type="email"/>
                                <v-text-field 
                                    append-icon="lock" 
                                    name="password" 
                                    label="Password" 
                                    id="password" 
                                    type="password"/>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn block color="primary">Login</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    }
}
</script>