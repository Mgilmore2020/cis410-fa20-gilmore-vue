import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home.vue';
import Account from './components/Account.vue';
import ApplicationCreate from './components/ApplicationCreate.vue';
import Login from './components/Login.vue';
import NotFound from './components/NotFound.vue';
import SignUp from './components/SignUp.vue';
import Workplace from './components/Workplace.vue';
import WorkplaceDetail from './components/WorkplaceDetail.vue';
import store from './store.js'

Vue.use(VueRouter);

const routes = [
    {path: '/', component: Home},
    {path: '/account', component: Account, beforeEnter(to, from, next){
        if(store.state.token)
            {next()}
            else{next('/signin')}
    }},
    {path: '/signin', component: Login},
    {path: '/workplaces', component: Workplace},
    {path: '/workplaces/:pk', component: WorkplaceDetail,
        children: [
            {path: 'application', component: ApplicationCreate}
        ] },
    {path: '/signup', component: SignUp},
    {path: '/:invalidroute(.*)', component: NotFound}
]

export default new VueRouter({mode: 'history', routes})