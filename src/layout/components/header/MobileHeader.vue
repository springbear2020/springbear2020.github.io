<script setup>
import { useRoute, useRouter } from "vue-router";
import { computed, ref, watchEffect } from "vue";
import { githubBaseUrl, csdnBaseUrl, appsBaseUrl } from "@/config.js";
import { useSearchStore } from "@/pinia/index.js";
import { sourceType } from "@/constants/index.js";
import { copyToClipboard } from "@/utils/clipboard.js";
import { showSuccessToast } from "vant";
import routes from "@/router/modules/mobile.js";

const route = useRoute();
const router = useRouter();
const searchStore = useSearchStore();

// 导航栏
const navTitle = ref("主页");
const handleLogoClick = () => {
  router.push("/");
  popupShow.value = false;
};
const handleRightClick = () => {
  popupShow.value = true;
};

// 弹出层
const popupShow = ref(false);
const handleClosed = () => {
  searchKeyword.value = "";
  searchResultList.value = [];
};

// 弹出层 > 搜索框
const searchKeyword = ref("");
const searchResultList = ref([]);
const searchResultShow = computed(() => {
  return searchResultList.value.length > 0;
});
const handleSearch = (newValue) => {
  if (newValue) {
    searchResultList.value = searchStore
      .doSearch(newValue, sourceType.all)
      .slice(0, 10);
  } else {
    searchResultList.value = [];
  }
};
const handleResultClick = (result) => {
  const { type, link } = result;
  switch (type) {
    case sourceType.blog:
      window.open(link, "_blank");
      break;
    case sourceType.repo:
      window.open(`${githubBaseUrl}/${link}/`, "_blank");
      break;
    case sourceType.app:
      window.open(`${appsBaseUrl}/${link}/`, "_blank");
      break;
    case sourceType.pdf:
      const { remark } = result;
      copyToClipboard(remark, "");
      showSuccessToast(`百度网盘提取码 ${remark} 已复制到剪切板！`);
      setTimeout(() => {
        window.open(link, "_blank");
      }, 1000);
      break;
    case sourceType.route:
      router.push(link);
      popupShow.value = false;
      break;
  }
};

// 弹出层 > 导航单元格
const extractPathTitleMap = (routes, map = new Map()) => {
  routes.forEach((route) => {
    if (
      !route.children &&
      route.path &&
      route.meta &&
      route.meta.title &&
      !route.meta.hidden
    ) {
      map.set(route.path, route.meta.title);
    }
    if (route.children) {
      extractPathTitleMap(route.children, map);
    }
  });
  return map;
};
const pathTitleMap = extractPathTitleMap(routes);
const handleCellClick = (path) => {
  router.push(path);
  popupShow.value = false;
};

watchEffect(() => {
  navTitle.value = pathTitleMap.get(route.path) || "主页";
});
</script>

<template>
  <van-nav-bar
    @click-left="handleLogoClick"
    @click-right="handleRightClick"
    fixed
    placeholder
    :title="navTitle"
  >
    <template #left>
      <van-icon name="/logo.png" size="22" class="logo" />
    </template>
    <template #right>
      <van-icon name="ellipsis" size="22" />
    </template>
  </van-nav-bar>

  <van-popup
    v-model:show="popupShow"
    closeable
    position="right"
    class="full popup"
    @closed="handleClosed"
  >
    <!-- logo -->
    <van-icon
      name="/logo.png"
      size="22"
      class="logo"
      @click="handleLogoClick"
    />

    <!-- search box -->
    <van-search
      v-model="searchKeyword"
      placeholder="在此输入搜索内容..."
      @update:model-value="handleSearch"
    />

    <!-- search result -->
    <div v-if="searchResultShow">
      <van-cell
        is-link
        v-for="item in searchResultList"
        @click="handleResultClick(item)"
      >
        <template #title>
          <van-text-ellipsis :content="item.title" />
        </template>
      </van-cell>
    </div>

    <!-- navigation list -->
    <div v-else>
      <van-cell
        is-link
        v-for="path in pathTitleMap.keys()"
        :title="pathTitleMap.get(path)"
        :to="path"
        @click="handleCellClick(path)"
      />

      <van-grid :border="false" :column-num="2" square>
        <van-grid-item
          icon="/resources/svg/github.svg"
          text="GitHub"
          :url="githubBaseUrl"
        />
        <van-grid-item
          icon="/resources/svg/csdn.svg"
          text="CSDN"
          :url="csdnBaseUrl"
        />
      </van-grid>
    </div>
  </van-popup>
</template>

<style scoped lang="scss">
.logo {
  :deep(.van-icon__image) {
    border-radius: 4px;
  }
}

.popup {
  .logo {
    padding: 16px 0 0 16px;
  }
}
</style>
