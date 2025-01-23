import { createRouter, createWebHashHistory } from "vue-router";
import routes from "@/router/modules/index.js";
import mobile from "@/router/modules/mobile.js";
import { isMobile } from "@/config.js";

const router = createRouter({
  history: createWebHashHistory(),
  routes: isMobile ? mobile : routes,
});

export default router;
