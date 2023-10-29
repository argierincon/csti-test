import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      component: () => import("../pages/login.vue"),
      meta: { layout: "blank" },
    },
    {
      path: "/employees",
      component: () => import("../pages/employees.vue"),
      meta: { layout: "default" },
    },
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

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("jwt");
  if (to.fullPath !== "/login") {
    if (!token) {
      next("/login");
    }
  }
  if (to.fullPath === "/login") {
    if (token) {
      next("/employees");
    }
  }
  next();
});

export default router;
