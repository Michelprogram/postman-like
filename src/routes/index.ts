import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

import Home from "@/views/Home.vue";
import HistoryDetail from "@/views/DetailHistory.vue";
import store from "@/store/index";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/history/:id",
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
