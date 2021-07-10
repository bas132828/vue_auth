import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: () => import("../views/SignIn.vue"),
  },
  {
    path: "/main",
    name: "Main",
    component: () => import("../views/Main.vue"),
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: () => import("../views/SignUp.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
