<template>
    <div>
        <h1>Log In</h1>
        <div v-if="this.$route.query.signupsuccess" class="alert alert-success">Thank you for signing up! Please log in now.</div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>