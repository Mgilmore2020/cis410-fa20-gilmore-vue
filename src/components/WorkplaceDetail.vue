<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h2 class="text-primary">{{workplace.WorkplaceName}}</h2>
                <br/>
                <p>Location: <br/> <strong>{{workplace.Location}}</strong></p>
                <p>Industry: <br/> <strong>{{workplace.IndustryName}}</strong></p>
            </div>
        </div>
        <br/>
        
        <router-link v-if="auth" :to="`/workplaces/${this.$route.params.pk}/application`">
            <button type="button" class="btn btn-success">Add an Application</button>
        </router-link>
        <router-link v-else :to="`/signin`">
            <button type="button" class="btn btn-outline-success">Sign In to Add an Application</button>
        </router-link>
        <br/>
        <br/>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    computed:{
        workplace(){
            var workplaces = this.$store.state.workplaces;
            var thisworkplace = workplaces.find((aWorkplace)=> aWorkplace.WorkplacePK == this.$route.params.pk)

            //console.log("Here is the Workplace you want", thisworkplace)

            return thisworkplace
        },
        auth(){return this.$store.state.token}
    }
    
}
</script>

<style scoped>

</style>