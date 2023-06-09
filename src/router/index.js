import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import { authGuard } from "../middlewares/authMiddleware";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/todos",
    name: "TodoView",
    component: () => import("../views/TodoView.vue"),
    beforeEnter: authGuard,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
