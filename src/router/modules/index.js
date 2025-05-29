const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/home/index.vue"),
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
        name: "BlogStudy",
        component: () => import("@/views/tabs/index.vue"),
        meta: {
          title: "学习笔记",
          slogan: "路漫漫其修远兮，吾将上下而求索",
          tabs: [
            {
              label: "Go 语言圣经",
              subComponent: "ElementTable",
            },
            {
              label: "C++ Primer",
              subComponent: "ElementTable",
            },
            {
              label: "Java",
              subComponent: "BlogCardList",
            },
            {
              label: "前端",
              subComponent: "BlogCardList",
            },
            {
              label: "计算机基础",
              subComponent: "BlogCardList",
            },
            {
              label: "面试宝典",
              subComponent: "BlogCardList",
            },
            {
              label: "暂未分类",
              subComponent: "BlogCardList",
            },
          ],
        },
      },
      {
        path: "/blog/problems",
        name: "BlogProblems",
        component: () => import("@/views/tabs/index.vue"),
        meta: {
          title: "刷题记录",
          slogan: "纸上得来终觉浅，绝知此事要躬行",
          tabs: [
            {
              label: "基础编程题目集",
              subComponent: "ElementTable",
            },
            {
              label: "C语言程序设计(第3版)",
              subComponent: "ElementTable",
            },
            {
              label: "C语言程序设计实验与习题指导(第3版)",
              subComponent: "ElementTable",
            },
          ],
        },
      },
      {
        path: "/blog/coding",
        name: "BlogCoding",
        component: () => import("@/views/simple/index.vue"),
        meta: {
          title: "程序人生",
          slogan: "衣带渐宽终不悔，为伊消得人憔悴",
          subComponent: "BlogCardList",
        },
      },
      {
        path: "/blog/whut",
        name: "BlogWHUT",
        component: () => import("@/views/simple/index.vue"),
        meta: {
          title: "武理四年",
          slogan: "厚德博学，追求卓越",
          subComponent: "CourseTable",
        },
      },
    ],
  },
  {
    path: "/pdf",
    name: "PDF",
    component: () => import("@/views/tabs/index.vue"),
    meta: {
      title: "PDF 资源",
      slogan: "本 PDF 资源由个人精心编写或从网络搜集整理而成，旨在为学习提供参考，敬请合理使用",
      tabs: [
        {
          label: "武理课程报告",
          subComponent: "CourseTable",
          ignoreRouteTitle: true,
        },
        {
          label: "编程语言书籍",
          subComponent: "ElementTable",
          ignoreRouteTitle: true,
        },
      ],
    },
  },
  {
    path: "/repo",
    name: "Repository",
    component: () => import("@/views/simple/index.vue"),
    meta: {
      title: "GitHub 仓库",
      slogan: "本人在项目中担任主导角色，负责整体设计并亲自参与全程开发、精心打造的代码工程项目",
      subComponent: "CategoryCardList",
    },
  },
  {
    path: "/app",
    name: "Application",
    component: () => import("@/views/simple/index.vue"),
    meta: {
      title: "WSL 应用",
      slogan: "一些部署在我个人电脑 Windows Subsystem for Linux(WSL) 环境中可正常运行的应用",
      subComponent: "CategoryCardList",
    },
  },
  {
    path: "/read",
    name: "WeRead",
    component: () => import("@/views/simple/index.vue"),
    meta: {
      title: "微信读书",
      slogan: "粗缯大布裹生涯，腹有诗书气自华",
      subComponent: "CategoryCardList",
    },
  },
  {
    path: "/sentence",
    name: "Sentence",
    component: () => import("@/views/tabs/index.vue"),
    meta: {
      title: "三五七言",
      slogan: "以我观我，故物皆著我之色彩",
      tabs: [
        {
          label: "古诗",
          subComponent: "SentenceList",
          ignoreRouteTitle: true,
        },
        {
          label: "曲词",
          subComponent: "SentenceList",
          ignoreRouteTitle: true,
        },
        {
          label: "文言",
          subComponent: "SentenceList",
          ignoreRouteTitle: true,
        },
        {
          label: "白话",
          subComponent: "SentenceList",
          ignoreRouteTitle: true,
        },
      ],
    },
  },
  {
    path: "/:catchAll(.*)",
    name: "Error",
    component: () => import("@/views/error/index.vue"),
    meta: { title: "错误页", hidden: true },
  },
];

export default routes;
