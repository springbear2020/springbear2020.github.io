import { defineStore } from "pinia";
import { onMounted, ref } from "vue";
import Papa from "papaparse";

export const useDataStore = defineStore("dataStore", () => {
  const dataList = ref([]);

  const fetchData = () => {
    const urls = [
      "/resources/csv/blog.csv",
      "/resources/csv/pdf.csv",
      "/resources/csv/category.csv",
      "/resources/csv/sentence.csv",
    ];
    urls.forEach(async (url) => {
      try {
        const response = await fetch(url);
        const text = await response.text();
        Papa.parse(text, {
          header: true,
          skipEmptyLines: true,
          complete: ({ data }) => {
            dataList.value.push(...data);
          },
        });
      } catch (error) {
        console.error(error);
      }
    });
  };

  const doSearch = (titleStr, topRouteStr) => {
    const lowerCaseTitle = titleStr.toLowerCase();
    const lowerCaseTopRoute = topRouteStr ? topRouteStr.toLowerCase() : null;

    if (lowerCaseTopRoute) {
      return dataList.value
        .filter(
          ({ topRoute }) =>
            topRoute.toLowerCase().indexOf(lowerCaseTopRoute) === 0,
        )
        .filter(({ title }) => title.toLowerCase().includes(lowerCaseTitle));
    }

    return dataList.value.filter(({ title }) =>
      title.toLowerCase().includes(lowerCaseTitle),
    );
  };

  const loadData = (route) => {
    const { title, slogan } = route.meta;
    const target = dataList.value.filter(({ category, topRoute }) => {
      return category.indexOf(title) === 0 || topRoute.indexOf(title) === 0;
    });
    return {
      data: target,
      tips: `${title}【${target.length}】：${slogan}`,
    };
  };

  onMounted(() => {
    fetchData();
  });

  return {
    doSearch,
    loadData,
  };
});
