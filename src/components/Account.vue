<template>
    <div>
        <h1>Account</h1>
        <hr/>
        <h3> {{firstName}}'s Applications </h3>

        <p v-if="accountError" class="form-text text-danger">Can not get your account information, please try again later</p>
        
        <table v-if="applicationsByUser" class="table">
            <thead>
                <th>About</th>
                <th>DateApplied</th>
                <!-- <th>Rating</th> -->
            </thead>
            <tbody>
                <tr v-for="thisApplication in ApplicationsByUser" :key="thisApplication.ApplicationPK">
                    <th><router-link :to="`/applications/${thisApplication.WorkplaceFK}`">{{thisApplication.About}}</router-link></th>
                    <th>{{thisApplication.DateApplied}}</th>
                    <!-- <th>{{thisApplication.Rating}}</th> -->
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
        axios.get("/applications/me", {
            headers: {
                Authorization: `Bearer ${this.$store.state.token}`
            }
        })
        .then((response)=>{ 
            console.log("here is the applications/me response:", response)
            this.applicationsByUser = response.data})
        .catch(()=>{
            this.accountError = true
        })
    }
}
</script>


<style scoped>

</style>