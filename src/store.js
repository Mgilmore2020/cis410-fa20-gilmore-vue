import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import routes from './routes.js';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        token: null,
        user: null,
        workplaces: []
    },
    mutations:{
        storeTokenInApp(state, myToken){
            state.token = myToken
        },
        storeUserInApp(state, myUser){
            state.user = myUser
        },
<<<<<<< HEAD
        storeWorkplace(state, myWorkplacess){
=======
        storeWorkplace(state, myWorkplaces){
>>>>>>> 6e93081ab356f6c3853030fc95a3af210f8b4b0f
            state.workplaces = myWorkplaces
        },
        clearAuthData(state){
            state.token = null;
            state.user = null;
        }
    },
    actions:{
        getWorkplace({commit}){
            axios.get('/workplaces')
            .then((myResponse)=>{
                console.log("response from getworkplace action", myResponse);
                commit('storeworkplace', myResponse.data)
            })
            .catch(()=>{console.log("error in getworkplace action")})
        },
        logout({commit, state}){
            axios.post('/contacts/logout', null,{
                headers:{
                    Authorization: `Bearer ${state.token}`
                }
            });

            commit('clearAuthData');

            routes.replace("/");
        }

    }
})