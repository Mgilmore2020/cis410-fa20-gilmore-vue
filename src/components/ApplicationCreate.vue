<template>
     <div class="row justify-content-center">
         <div class="col-lg-10">
             <div class="card">
                 <div class="card-body">
                     <h4>Create an application</h4> 
                     <form id="review-form" @submit.prevent="submitApplication">
                        <div class="form-group">
                             <label for="ratinginput">About</label> 
                             <input type="number" id="ratinginput" name=" rating" min="1" max="10" required="required" class="form-control" v-model="about">
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
            about: null,
            dateapplied:"",
            errorMessage: null,
        }
    },
    methods:{
        submitApplication(){
            const myApplication={
                about: this.about,
                dateApplied: this.dateApplied,
                workplaceFK: this.$route.params.fk
            };
            // console.log("here is the review", myReview)
            const token = this.$store.state.token;
            axios.post("/applications", myapplication, {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            .then(()=>{this.$router.replace('/account')})
            .catch(()=>{this.errorMessage = "Unable to create a review, please try again later."})
        },
        cancelApplication(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>

</style>