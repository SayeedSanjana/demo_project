<template>
    <div>
        <div class="flex items-center justify-center min-h-screen bg-gray-100">
            <div class="px-8 py-5 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
                <h3 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Join us</h3>
                <form action="#" @submit.prevent="createAccount">
                    <div class="mt-4">
                        <div class="flex py-2 ">
                            <div class=" mx-3" id="first-name-block">
                                <label class="block text-sm text-gray-700 font-semibold" for="Fist Name">First Name</label>
                                <input @blur="v$.form.firstName.$touch()" v-model="form.firstName" type="text" placeholder="Name" class=" text-sm w-60 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                                <span v-show="v$.form.firstName.$error" class="mt-2 text-sm text-red-400">
                                    <div v-for="error of v$.form.firstName.$errors" :key="error.$uid">
                                        <small class="form-error-text">
                                            {{error.$message}}
                                        </small>
                                    </div>
                                </span>
                            </div>
                            <div class="mx-3" id="last-name-block">
                                <label class="block text-sm text-gray-700 font-semibold" for="Name">Last Name</label>
                                <input @blur="v$.form.lastName.$touch()" v-model="form.lastName" type="text" placeholder="Surname" class="text-sm px-4 py-2 mt-2 border w-60 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                                <span v-show="v$.form.lastName.$error" class="mt-2 text-sm text-red-400">
                                    <div v-for="error of v$.form.lastName.$errors" :key="error.$uid">
                                        <small class="form-error-text">
                                            {{error.$message}}
                                        </small>
                                    </div>
                                </span>
                            </div>
                        </div>
                        <div class="flex  py-2">
                            <div class="mx-3" id="gender-block">
                                <label class="block text-sm text-gray-700 font-semibold" for="Name">Gender</label>                
                                <div class="relative">
                                    <select @blur="v$.form.gender.$touch()" v-model="form.gender" class=" text-sm appearance-none w-60  px-4 py-2 mt-2 block bg-white  border border-gray-200 rounded    focus:border-light-turquoise focus:border-opacity-30 focus:outline-none" >
                                        <option v-for="i in gender" :key="i">{{i}}</option>
                                    </select>
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                                <span v-show="v$.form.gender.$error" class="mt-2 text-sm text-red-400">
                                    <div v-for="error of v$.form.gender.$errors" :key="error.$uid">
                                        <small class="form-error-text">
                                            {{error.$message}}
                                        </small>
                                    </div>
                                </span>
                            </div>
                            <div class="mx-3"  id="dob-block">
                                <label class="block text-sm text-gray-700 font-semibold " for="Name">Date of Birth</label>
                                <input @blur="v$.form.dob.$touch()" v-model="form.dob" type="date" placeholder="" class=" text-sm w-60 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                                <span v-show="v$.form.dob.$error" class="mt-2 text-sm text-red-400">
                                    <div v-for="error of v$.form.dob.$errors" :key="error.$uid">
                                        <small class="form-error-text">
                                            {{error.$message}}
                                        </small>
                                    </div>
                                </span>
                            </div>
                        </div>
                        <div class="mx-3 py-2" id="address-block">
                            <label class="block text-sm text-gray-700 font-semibold" for="Name">Address</label>
                            <textarea @blur="v$.form.address.$touch()" v-model="form.address" class=" text-sm form-control block w-11/12 mr-4 px-4 py-2 mt-2 font-normal text-sea-blue bg-white bg-clip-padding  border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-sea-blue focus:bg-white focus:border-sea-blue focus:outline-none" id="exampleFormControlTextarea1"
                            rows="3" ></textarea>
                            <span v-show="v$.form.address.$error" class="mt-2 text-sm text-red-400">
                                <div v-for="error of v$.form.address.$errors" :key="error.$uid">
                                    <small class="form-error-text">
                                        {{error.$message}}
                                    </small>
                                </div>
                            </span>
                        </div>
                        <div class="flex  py-2 ">
                            <div class="mx-3">
                                <label class="block text-sm text-gray-700 font-semibold" for="Name">Country Code</label>
                                <input  v-model="countryCode" type="text" placeholder="Code" class="w-60  text-sm px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                            </div>
                            <div class="mx-3" id="mobile-number-block">
                                <label class="block text-sm text-gray-700 font-semibold" for="Name">Mobile Number</label>
                                <input @blur="v$.form.phone.$touch()" v-model="form.phone" type="text" placeholder="Mobile" class="w-60  text-sm px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                                <span v-show="v$.form.phone.$error" class="mt-2 text-sm text-red-400">
                                    <div v-for="error of v$.form.phone.$errors" :key="error.$uid">
                                        <small class="form-error-text">
                                            {{error.$message}}
                                        </small>
                                    </div>
                                </span>
                            </div>
                        </div>
                        <div class=" mx-3" id="email-block">
                            <label class="block text-sm text-gray-700 font-semibold" for="Email">Email</label>
                            <input @blur="v$.form.email.$touch()" v-model="form.email" type="text" placeholder="Email" class=" text-sm w-11/12 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                            <span v-show="v$.form.email.$error" class="mt-2 text-sm text-red-400">
                                <div v-for="error of v$.form.email.$errors" :key="error.$uid">
                                    <small class="form-error-text">
                                        {{error.$message}}
                                    </small>
                                </div>
                            </span>
                        </div>
                        <div class="mx-3 py-2" id="password">
                            <label class="block text-sm text-gray-700 font-semibold" for="Email">Password</label>
                            <input @blur="v$.form.password.$touch()" v-model="form.password" type="text" placeholder="Password" class=" text-sm w-11/12 px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                            <span v-show="v$.form.password.$error" class="mt-2 text-sm text-red-400">
                                <div v-for="error of v$.form.password.$errors" :key="error.$uid">
                                    <small class="form-error-text">
                                        {{error.$message}}
                                    </small>
                                </div>
                            </span>
                        </div>
                        <div class="flex py-4">
                            <button type="submit"  class="group w-11/12 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Create Account</button>
                        </div>
                        <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                            Already have an account?
                            <router-link to="/" class="text-purple-600 hover:text-purple-700 focus:text-purple-700 transition duration-200 ease-in-out">Login</router-link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import useValidate from '@vuelidate/core';
import {required,numeric,minLength,email} from '@vuelidate/validators';
    export default {
        data(){
            return{
                
                gender:['Male','Female','Others'],
                form:{
                    firstName:'',
                    lastName:'',
                    gender:'',
                    dob:'',
                    address:'',
                    phone:'',
                    email:'',
                    password:''
                },
                confirmPassword:'',
                countryCode:'',
            }
        },
        setup(){
            return{
            v$: useValidate(),
            }
        },
        validations(){
        return {
            form:{
               firstName:{required},
               lastName:{required},
               gender:{required},
               dob:{required},
               address:{required},
               phone:{required,numeric,minLength: minLength(11)},
               email:{required,email},
               password:{required}
               }
            }
        },
      
        methods:{
            async createAccount(){
                this.v$.$touch();
                if (!this.v$.$error) {
                await axios.post('http://localhost:3001/api/users/register', this.form, )
                    .then((response) => {
                    console.log(response);
                     alert(response.data.message);
                    // localStorage.setItem("userInfo",JSON.stringify(response.data));
                    this.$router.push('/');
                    })
                    .catch((error) => {
                    alert(error);
                  })
                }
            }      
        }
    }
</script>

<style lang="scss" scoped>

</style>