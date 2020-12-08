<template>
    <div>
        <h1>Account</h1>
        <hr/>
        <h3> {{firstName}}'s Applications </h3>
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
            headers:{
                Authorization: `Bearer ${this.$store.state.token}`
            }
            .then((response)=>{ 
                console.log(response)
                console.log("Here is the application/me response", response)
                this.applicationsByUser = response.data})
        })
    }
}
</script>

<style scoped>

</style>