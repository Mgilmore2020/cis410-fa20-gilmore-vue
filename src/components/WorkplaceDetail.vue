<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h2 class="text-primary">{{workplace}}</h2>
                <br/>
                <p>Pitch Text: <br/> <strong>{{workplace.PitchText}}</strong></p>
                <p>About: <br/> <strong>{{workplace.About}}</strong></p>
                <p>Location: <br/> <strong>{{workplace.Location}}</strong></p>
                <p>Industry: <br/> <strong>{{workplace.Industry}}</strong></p>
            </div>
        </div>
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
        }
    }
}
</script>

<style scoped>

</style>