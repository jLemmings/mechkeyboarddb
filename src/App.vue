<template>
    <v-app id="inspire">
        <v-navigation-drawer
                v-model="drawer"
                app
                clipped
                mini-variant
                expand-on-hover
        >
            <v-list dense>
                <v-list-item link>
                    <v-list-item-action>
                        <v-icon>mdi-account</v-icon>
                    </v-list-item-action>

                    <v-list-item-content>
                        <router-link to='profile'>
                            <v-list-item-title>Profile</v-list-item-title>
                        </router-link>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item link>
                    <v-list-item-action>
                        <v-icon>mdi-view-dashboard</v-icon>
                    </v-list-item-action>

                    <v-list-item-content>
                        <router-link to='dashboard'>
                            <v-list-item-title>Dashboard</v-list-item-title>
                        </router-link>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item link>
                    <v-list-item-action>
                        <v-icon>mdi-settings</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Settings</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item link @click="logout" class="bottom-row">
                    <v-list-item-action>
                        <v-icon>mdi-logout</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Logout</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>

            </v-list>

        </v-navigation-drawer>

        <v-app-bar
                app
                clipped-left
        >
            <v-toolbar-title>Mech Build DB</v-toolbar-title>
            <v-spacer></v-spacer>

            <router-link to='login'>
                <v-btn depressed medium outlined>Login</v-btn>
            </router-link>

            <router-link to='register'>
                <v-btn depressed medium outlined>Register</v-btn>
            </router-link>

        </v-app-bar>

        <v-content>

            <router-view></router-view>


        </v-content>

        <v-footer app>
            <span>&copy; 2020</span>
        </v-footer>
    </v-app>
</template>

<script>

    export default {
        name: 'App',

        methods: {
            logout() {
                this.$store.dispatch('signOutAction')
            }
        },

        data: () => ({
            drawer: null,
        }),
        created() {
            this.$vuetify.theme.dark = true
        },
    };
</script>
