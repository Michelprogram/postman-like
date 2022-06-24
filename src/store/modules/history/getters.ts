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
};
