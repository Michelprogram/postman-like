import store from "@/store/index";
import { createApp } from "vue";
import App from "@/App.vue";

import "@/assets/index.css";
import icons from "@/components/icons/FontAwesome";
import router from "@/routes/index";

createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", icons)
  .mount("#app");
