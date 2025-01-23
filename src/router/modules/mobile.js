const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/home/mobile.vue"),
    meta: { title: "主页", hidden: true },
  },
];

export default routes;
