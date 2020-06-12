<template>
    <v-app id="inspire">
        <v-content>
            <v-container
                    class="fill-height"
                    fluid
            >
                <v-row
                        align="center"
                        justify="center"
                >
                    <v-col
                            cols="12"
                            sm="8"
                            md="4"
                    >
                        <v-card class="elevation-12">
                            <v-toolbar
                                    color="primary"
                                    dark
                                    flat
                            >
                                <v-toolbar-title>Register Account</v-toolbar-title>

                            </v-toolbar>
                            <v-card-text>
                                <v-form ref="form" v-model="valid" lazy-validation>
                                    <v-text-field
                                            v-model="email"
                                            :rules="emailRules"
                                            label="E-mail"
                                            required
                                    ></v-text-field>

                                    <v-text-field
                                            v-model="password"
                                            :rules="passwordRules"
                                            label="Password"
                                            required
                                            :append-icon="passwordShow ? 'visibility' : 'visibility_off'"
                                            :type="passwordShow ? 'text' : 'password'"
                                            @click:append="passwordShow = !passwordShow"
                                    ></v-text-field>

                                    <v-text-field
                                            v-model="confirmPassword"
                                            label="confirm Password"
                                            :rules="passwordRules"
                                            required
                                            :append-icon="confirmPasswordShow ? 'visibility' : 'visibility_off'"
                                            :type="confirmPasswordShow ? 'text' : 'password'"
                                            @click:append="confirmPasswordShow = !confirmPasswordShow"
                                    ></v-text-field>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                        :disabled="!valid"
                                        color="primary"
                                        @click="validate"
                                >
                                    Register
                                </v-btn>

                                <v-btn
                                        color="warn"
                                        @click="reset"
                                >
                                    Reset Form
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>



    </v-app>

</template>




<script>
    export default {
        data: () => ({
            passwordShow: false,
            confirmPasswordShow: false,
            valid: true,
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid'
            ],
            password: '',
            confirmPassword: '',
            passwordRules: [
                v => !!v || 'Password and Confirm password Required'
            ]
        }),
        methods: {
            validate () {
                if (this.$refs.form.validate()) {
                    this.snackbar = true
                    this.registerWithFirebase()
                }
            },
            reset () {
                this.$refs.form.reset()
            },
            registerWithFirebase () {
                const user = {
                    email: this.email,
                    password: this.password
                }
                this.$store.dispatch('signUpAction', user)
            }
        }
    }
</script>
