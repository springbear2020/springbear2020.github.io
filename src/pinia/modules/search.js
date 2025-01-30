import { defineStore } from "pinia";
import { ref } from "vue";
import { sourceType } from "@/constants/index.js";
import blogCodingList from "@/assets/json/blog-coding.json";
import blogCppPrimerList from "@/assets/json/blog-cpp-primer.json";
import blogPtaList from "@/assets/json/blog-pta.json";
import blogStudyList from "@/assets/json/blog-study.json";
import blogWhutList from "@/assets/json/blog-whut.json";
import repoList from "@/assets/json/repo.json";
import appList from "@/assets/json/apps.json";
import pdfWhutList from "@/assets/json/pdf-whut.json";
import desktopRouteList from "@/router/modules/index.js";
import mobileRouteList from "@/router/modules/mobile.js";
import { isMobile } from "@/config.js";

const routeList = isMobile ? mobileRouteList : desktopRouteList;

export const useSearchStore = defineStore("searchStore", () => {
  const dataSource = ref([]);
  const addItemsToDataSource = (items, transformFn) => {
    dataSource.value.push(...items.map(transformFn));
  };

  // 博客
  addItemsToDataSource(
    [
      ...blogCodingList,
      ...blogCppPrimerList,
      ...blogPtaList,
      ...blogStudyList,
      ...blogWhutList,
    ],
    ({ title, link }) => ({ title, link, type: sourceType.blog }),
  );

  // 仓库
  repoList.forEach(({ list }) => {
    addItemsToDataSource(list, ({ title, name }) => ({
      title: name,
      link: title,
      type: sourceType.repo,
    }));
  });

  // 应用
  appList.forEach(({ list }) => {
    addItemsToDataSource(list, ({ title, name }) => ({
      title,
      link: name,
      type: sourceType.app,
    }));
  });

  // PDF
  addItemsToDataSource(pdfWhutList, ({ title, link, code }) => ({
    title,
    link,
    type: sourceType.pdf,
    remark: code,
  }));

  // 路由
  const addRoutes = (routes) => {
    routes.forEach((route) => {
      dataSource.value.push({
        title: route.meta.title,
        link: route.path,
        type: sourceType.route,
      });
      if (route.children && route.children.length > 0) {
        addRoutes(route.children);
      }
    });
  };
  addRoutes(routeList);

  const doSearch = (titleStr, typeStr) => {
    if (typeStr !== sourceType.all) {
      return dataSource.value.filter(
        ({ title, type }) => type === typeStr && title.includes(titleStr),
      );
    }
    return dataSource.value.filter(({ title }) => title.includes(titleStr));
  };

  return {
    doSearch,
  };
});
