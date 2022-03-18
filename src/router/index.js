
import { createRouter, createWebHistory } from 'vue-router'
import Register from "../components/Register.vue";
import Login from "../components/Login.vue";
import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";



// creating Guard for guest
function guest(to, from, next) {
  if (localStorage.getItem('users')) {
    next({ name: 'Dashboard' });
  } else {
    next();
  }
}
// creating Guard for auth
function guard(to, from, next) {
  if (localStorage.getItem('users')) {
    next();
  } else {
    next({ name: 'Login' });
    alert("You are not logged in");
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
      beforeEnter: guest,
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
      beforeEnter: guard,
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
      beforeEnter: guest,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
      beforeEnter: guest,
    },
  ]
})

export default router
