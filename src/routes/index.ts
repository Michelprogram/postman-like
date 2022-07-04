import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

import Home from "@/views/Home.vue";
import HistoryDetail from "@/views/DetailHistory.vue";
import store from "@/store/index";

const PREFIX = "/postman-like";

const routes: Array<RouteRecordRaw> = [
  {
    path: PREFIX + "/",
    name: "Home",
    component: Home,
  },
  {
    path: PREFIX + "/history/:id",
    name: "HistoryDetail",
    component: HistoryDetail,
    props: true,
    beforeEnter: (to) => {
      const id = to.params.id;
      if (store.getters.getInformationsById(id) == undefined) {
        return "/";
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
