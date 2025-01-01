import { createPinia } from "pinia";
import { useSearchStore } from "@/pinia/modules/search.js";

const store = createPinia();

export { store, useSearchStore };
