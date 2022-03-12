import { createRouter, createWebHistory } from "vue-router";
import AboutView from "../views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: AboutView,
    },
    {
      path: "/customers",
      name: "customers",
      component: () => import("../views/CustomersPage.vue"),
    },
  ],
});

export default router;
