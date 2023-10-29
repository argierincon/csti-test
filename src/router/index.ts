import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/login", component: () => import("../pages/login.vue"), meta: { layout: "blank" } },
    { path: "/employees", component: () => import("../pages/employees.vue"), meta: { layout: "default" } },
    {
      path: "/recruitment",
      component: () => import("../pages/recruitment.vue"),
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
