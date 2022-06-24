import type RootState from "@/store/types";
import type { GetterTree } from "vuex";
import type { Getters, History, HistoryState } from "./types";

export const getters: GetterTree<HistoryState, RootState> & Getters = {
  getHistories: (state): History[] => {
    return state.histories;
  },
  getHistoryById: (state, id: number): History | undefined => {
    return state.histories.find((el: History) => el.id == id);
  },
  getReversed: (state): History[] => {
    const res: History[] = [];
    for (let index = state.histories.length - 1; index > 0; index--) {
      const element = state.histories[index];
      res.push(element);
    }
    return res;
  },
};
