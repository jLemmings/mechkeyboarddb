import Vue from "vue";
import Router from "vue-router";
import Login from "../components/Login"
import Register from "../components/Register"
import Dashboard from "../components/Dashboard"
import Profile from "../components/Profile"
import Build from "../components/Build"
import firebase from 'firebase'

Vue.use(Router)


const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/login",
            name: "login",
            component: Login
        },
        {
            path: "/register",
            name: "Register",
            component: Register
        },
        {
            path: "/dashboard",
            name: "Dashboard",
            component: Dashboard,
        },
        {
            path: "/profile",
            name: "Profile",
            component: Profile,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/build",
            name: "Build",
            component: Build,
            meta: {
                requiresAuth: true
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
    firebase.auth().onAuthStateChanged(function(user) {
        if (requiresAuth && !user) {
            next('/login')
        } else if (requiresAuth && user) {
            console.log("logged in")
            next()
        } else {
            console.log("Not logged in")
            next()
        }
    });



})


export default router
