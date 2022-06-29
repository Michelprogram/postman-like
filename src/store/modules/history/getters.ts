import type RootState from "@/store/types";
import type { GetterTree } from "vuex";
import type { Getters, History, HistoryState, Informations } from "./types";

export const getters: GetterTree<HistoryState, RootState> & Getters = {
  getHistories: (state): History[] => {
    return state.histories.map((el: Informations) => el.history);
  },
  getInformations: (state): Informations[] => {
    return state.histories;
  },
  getInformationsById:
    (state) =>
    (id: number): Informations | undefined => {
      return state.histories.find((el: Informations) => el.id == id);
    },
  getReversed: (state): Informations[] => {
    const res: Informations[] = [];
    for (let index = state.histories.length - 1; index > 0; index--) {
      const element = state.histories[index];
      res.push(element);
    }
    return res;
  },
};
