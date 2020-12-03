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
                <tr v-for="thisWorkplace in Workplace" :key="thisWorkplace.WorkplacePK">
                    <th>{{thisWorkplace.Name}}</th>
                    <td>{{thisWorkplace.Location}}</td>
                    <td>{{thisWorkplace.Industry}}</td>
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
// import axios from 'axios';

export default {
    computed:{
        workplaces(){return this.$store.state.Workplaces}
    }
}
//  axios.get("/workplaces", myFormData)
//             .then((myResponse)=>{
//               console.log(myResponse)
//               })
</script>

<style scoped>

</style>