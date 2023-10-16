import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import React from "@/views/react.vue"
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path:'/react',
      component:React
    }
  ],
});
export default router;
