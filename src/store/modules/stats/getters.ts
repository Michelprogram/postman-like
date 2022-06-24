import type RootState from "@/store/types";
import type { GetterTree } from "vuex";
import type { Getters, StatsState } from "./types";

export const getters: GetterTree<StatsState, RootState> & Getters = {
  getMethod: (state): string => {
    return state.method;
  },
  getResponse: (state): string => {
    return state.response;
  },
  getTimer: (state): string => {
    return state.timer;
  },
};
