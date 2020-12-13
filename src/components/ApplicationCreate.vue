<template>
     <div class="row justify-content-center">
         <div class="col-lg-10">
             <div class="card">
                 <div class="card-body">
                     <h4>Create an application</h4> 
                     <form id="review-form" @submit.prevent="submitApplication">
                        <div class="form-group">
                             <label for="aboutinput">About</label> 
                             <input type="text" id="aboutinput" name=" about"  required="required" class="form-control" v-model="about">
                        </div> 

                        <div class="form-group">
                            <label for="summaryinput">Date Applied</label> <textarea row="3" id="summaryinput" name="summary" required="required" class="form-control" v-model="dateapplied"></textarea>
                        </div> 
                        
                        <button type="submit" class="btn btn-primary">Submit Application</button> 
                        
                        <button v-on:click="cancelReview" type="clear" class="btn btn-outline-danger">
                        Cancel
                        </button>

                        <p v-if="errorMessage" class="form-text text-danger">{{errorMessage}}</p>
                    </form>
                </div>
        </div>
        </div>
        </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            about: "",
            dateApplied: null,
            errorMessage: null,
        }
    },
    methods:{
        submitReview(){
            const myApplication={
                about: this.about,
                dateApplied: this.dateApplied,
                workplaceFK: this.$route.params.pk
            };
            console.log("here is the review", myApplication)
            const token = this.$store.state.token;
            axios.post("/applications", myapplication, {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            .then(()=>{this.$router.replace('/account')})
            .catch(()=>{this.errorMessage = "Unable to create a review, please try again later."})
        },
        cancelReview(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>

</style>