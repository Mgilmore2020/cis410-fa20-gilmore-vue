<template>
    <div>
        <h1>Account</h1>
        <hr/>
        <h3> {{firstName}}'s Applications </h3>

        <p v-if="accountError" class="form-text text-danger">Cannot get your account information, please try again later</p>
        
        <table v-if="applicationsByUser" class="table">
            <thead>
                <th>Workplace</th>
                <th>Location</th>
                <th>Interest</th>
                <th>Date Applied</th>
            </thead>
            <tbody>
                <tr v-for="thisApplication in applicationsByUser" :key="thisApplication.ApplicationPK">
                    <!-- <router-link :to="`/applications/ ${thisApplication.WorkplaceFK}`">{{thisApplication.WorkplaceName}}</router-link> -->
                   <th><router-link :to="`/workplaces/${thisApplication.WorkplaceFK}`">{{thisApplication.WorkplaceName}}</router-link></th>
                   <th>{{thisApplication.Location}}</th>
                   <th>{{thisApplication.Interest}}</th>
                   <th>{{thisApplication.DateApplied}}</th>
                </tr>
            </tbody>   
        </table>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            applicationsByUser: null,
            accountError: false
        }
    },
    computed:{
    firstName(){
        console.log(this.$store.state)
        return this.$store.state.user.NameFirst}
    },
    created(){
        axios.get("/application/me", {
            headers: {
                Authorization: `Bearer ${this.$store.state.token}`
            }
        })
        .then((response)=>{ 
            console.log("here is the application/me response:", response)
            this.applicationsByUser = response.data})
        .catch(()=>{
            this.accountError = true
        })
    }
}
</script>


<style scoped>

</style>