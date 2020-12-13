<template>
    <div>
        <h1>Workplace</h1>

<table class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Industry</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="thisWorkplace in Workplaces" :key="thisWorkplace.WorkplacePK">
                    <th>{{thisWorkplace.WorkplaceName}}</th>
<<<<<<< HEAD
                    <td>{{thisWorkplace.Location}}</td>
                    <td>{{thisWorkplace.Industry}}</td>
                    <td>
                        <router-link :to="`/workplaces/${thisWorkplace.WorkplacePK}`">
                            <button type="button" class="btn btn-primary">Details</button>
                        </router-link>
=======
                        <td>{{thisWorkplace.Location}}</td>
                        <td>{{thisWorkplace.Industry}}</td>
                        <td>
                            <router-link :to="`/workplaces/${thisWorkplace.WorkplacePK}`">
                                <button type="button" class="btn btn-primary">Details</button>
                            </router-link>
>>>>>>> 6e93081ab356f6c3853030fc95a3af210f8b4b0f
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    computed:{
        workplaces(){return this.$store.state.workplaces}
    }
}
//  axios.get("/workplaces", myFormData)
//             .then((myResponse)=>{
//               console.log(myResponse)
//               })
</script>

<style scoped>

</style>