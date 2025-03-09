const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/home/mobile.vue"),
    meta: { title: "主页", hidden: true },
  },
  {
    path: "/blog",
    name: "Blog",
    meta: { title: "CSDN 博客" },
    redirect: "/blog/study",
    children: [
      {
        path: "/blog/study",
        name: "Study",
        component: () => import("@/views/blog/study/mobile.vue"),
        meta: { title: "学习笔记" },
      },
      {
        path: "/blog/coding",
        name: "Coding",
        component: () => import("@/views/blog/coding/mobile.vue"),
        meta: { title: "程序人生" },
      },
      {
        path: "/blog/interview",
        name: "Interview",
        component: () => import("@/views/blog/interview/mobile.vue"),
        meta: { title: "面试宝典" },
      },
      {
        path: "/blog/whut",
        name: "WHUT",
        component: () => import("@/views/blog/whut/mobile.vue"),
        meta: { title: "武理四年" },
      },
      {
        path: "/blog/pta",
        name: "PTA",
        component: () => import("@/views/blog/pta/mobile.vue"),
        meta: { title: "PTA 题集" },
      },
    ],
  },
  {
    path: "/repo",
    name: "Repo",
    component: () => import("@/views/repo/mobile.vue"),
    meta: { title: "GitHub 仓库" },
  },
  {
    path: "/apps",
    name: "Apps",
    component: () => import("@/views/apps/mobile.vue"),
    meta: { title: "WSL 应用" },
  },
  {
    path: "/pdf",
    name: "PDF",
    component: () => import("@/views/pdf/mobile.vue"),
    meta: { title: "PDF 资源" },
  },
  {
    path: "/weread",
    name: "WeRead",
    component: () => import("@/views/weread/mobile.vue"),
    meta: { title: "微信读书" },
  },
  {
    path: "/:catchAll(.*)",
    name: "Error",
    component: () => import("@/views/error/mobile.vue"),
    meta: { title: "错误页", hidden: true },
  },
];

export default routes;
