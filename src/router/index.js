
import { createRouter, createWebHistory } from 'vue-router'
import Register from "../components/Register.vue";
import Login from "../components/Login.vue";
import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      // beforeEnter: guest,
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
      // beforeEnter: guard,
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
      // beforeEnter: guest,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
      // beforeEnter: guest,
    },
  ]
})

export default router
