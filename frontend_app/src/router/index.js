import { createRouter, createWebHistory } from 'vue-router';
import LogIn from "../views/LogIn";

const routes = [
  {
    path: '/',
    name: 'LogIn',
    component: LogIn
  }, 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
