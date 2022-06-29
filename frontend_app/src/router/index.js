import { createRouter, createWebHistory } from 'vue-router';
import LogIn from "../views/LogIn";
import SignUp from "../views/SignUp";

const routes = [
  {
    path: '/',
    name: 'LogIn',
    component: LogIn
  }, 
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  }, 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
