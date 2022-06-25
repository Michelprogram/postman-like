import App from "./App.vue";
import store from "@/store/index";
import { createApp } from "vue";
import "@/assets/index.css";
import icons from "@/components/icons/FontAwesome";

createApp(App).use(store).component("font-awesome-icon", icons).mount("#app");
