<template>
    <div>
        <h1>Workplace</h1>
        <hr/>

<table class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Industry</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="thisWorkplace in workplaces" :key="thisWorkplace.WorkplacePK">
                    <th>{{thisWorkplace.WorkplaceName}}</th>
                    <td>{{thisWorkplace.Location}}</td>
                    <td>
                        <router-link :to="`/workplaces/${thisWorkplace.WorkplacePK}`">
                            <button type="button" class="btn btn-primary">Details</button>
                        </router-link>

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