import {userService} from '../_services'
import {router} from '../_helpers'

const user = JSON.parse(localStorage.getItem('user'));

const initialState = user
    ? {status: {loggedIn: true}, user}
    : {status: {}, usesr: null};

export const authentication = {
    namespaced: true,
    state: initialState,
    actions: {
        //Ham login
        login({dispatch, commit}, {username, password}) {
            commit('loginRequest', {username});
            userService.login(username, password)
            .then(
                user => {
                    commit('loginSuccess', user);
                    router.push('/');
                },
                error => {
                    commit('loginFailure', error);
                    dispatch('alert/error', error, { root:true });
                }
            );  
        },
       //Ham logout
       logout({commit}) {
           userService.logout();
           commit('logout')
       }
    },
    mutations: {

        loginRequest(state, user) {
            state.status = {loggingIn: true};
            state.user = user;
        },

        loginSuccess(state, user) {
            state.status = {loggedIn: true},
            state.user = user;
        },

        loginFailure(state) {
            state.status = {},
            state.user = null
        },

        logout(state) {
            state.status = {},
            state.user = null
        }
    }
}

