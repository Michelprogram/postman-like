import App from "./App.vue";
import store from "@/store/index";
import { createApp } from "vue";
import "@/assets/index.css";

createApp(App).use(store).mount("#app");
