import { createRouter, createWebHistory } from "vue-router";

import Login from "../pages/login.vue";
import Employees from "../pages/employees.vue";
import Recruitment from "../pages/recruitment.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/login", component: Login, meta: { layout: "blank" } },
    { path: "/employees", component: Employees, meta: { layout: "default" } },
    {
      path: "/recruitment",
      component: Recruitment,
      meta: { layout: "default" },
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/login",
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   const t = localStorage.getItem("accessToken");
//   if (to.fullPath === "/") {
//     if (!t) {
//       next("/login");
//     }
//   }
//   if (to.fullPath === "/login") {
//     if (t) {
//       next("/");
//     }
//   }
//   next();
// });

export default router;
