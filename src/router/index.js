import Vue from "vue";
import VueRouter from "vue-router";
import MenClothing from "@/views/MenClothing.vue";
import WomenClothing from "@/views/WomenClothing.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/men-clothing", component: MenClothing },
  { path: "/women-clothing", component: WomenClothing },
  // Add other routes as needed
];

const router = new VueRouter({
  routes,
});

export default router;
