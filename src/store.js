import Vue from "vue";
import Vuex from "vuex";
import firebase from 'firebase'
import router from "./routes/index"

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        user: {},
        status: null,
        error: null
    },
    getters: {
        user(state) {
            return state.user
        },
        status(state) {
            return state.user
        },

        error(state) {
            return state.error
        }
    },
    mutations: {
        SET_LOGGED_IN(state, payload) {
            state.user.loggedIn = payload;
        },
        SET_USER(state, payload) {
            state.user = payload;
        },
        SET_STATUS(state, payload) {
            state.status = payload;
        },
        SET_ERROR(state, payload) {
            state.error = payload
        }
    },
    actions: {
        signUpAction({commit}, payload) {
            commit('SET_STATUS', 'loading')
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
                .then((response) => {
                    // response will have user
                    // user will have loggedIn will be updated to the state
                    router.push({path: '/profile'})
                    commit('SET_USER', response.data())
                    commit('SET_STATUS', 'success')
                    commit('SET_ERROR', null)
                })
                .catch((error) => {
                    commit('SET_STATUS', 'failure')
                    commit('SET_ERROR', error.message)
                })
        },
        signInAction({commit}, payload) {
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                .then((response) => {
                    commit('SET_USER', response.user)
                    commit('SET_STATUS', 'success')
                    commit('SET_ERROR', null)
                    router.push({path: 'profile'})
                })
                .catch((error) => {
                    commit('SET_STATUS', 'failure')
                    commit('SET_ERROR', error.message)
                })
        },
        signOutAction({commit}) {
            firebase.auth().signOut()
                .then((response) => {
                    console.log("Logged out User:", response.uid)
                    commit('SET_USER', null)
                    commit('SET_STATUS', 'success')
                    commit('SET_ERROR', null)
                })
                .catch((error) => {
                    commit('SET_STATUS', 'failure')
                    commit('SET_ERROR', error.message)
                })
        }
    }
});
