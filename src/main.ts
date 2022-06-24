import App from "./App.vue";
import store from "@/store/index";
import { createApp } from "vue";

createApp(App).use(store).mount("#app");
