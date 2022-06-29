<template>
    <div class="min-h-screen bg-gray-100">
        <nav class="bg-gray-800">
            <div class="flex justify-end">  
                <router-link to="/" @click="logout"
                    class="text-white py-4 px-9 block whitespace-no-wrap hover:text-purple-600">
                    Logout
                </router-link>
            </div>
       </nav>

       <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Hello user, Welcome to Dashboard</h2>
        <p class="mt-12 font-bold text-gray-700 mx-12">User Details: </p>
        <pre class="mx-12 mt-6">{{this.user}}</pre>
       </div>
    </div>
</template>

<script>
    export default {
        mounted(){
            this.getUser();
        },
        data(){
            return{
                user:null,
            }
        },
        methods:{
             logout() {
                localStorage.clear()
            },
            getUser(){
                this.user = JSON.parse(localStorage.getItem("userInfo")); 
              
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>