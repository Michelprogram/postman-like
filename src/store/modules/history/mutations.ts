import type { MutationTree } from "vuex";
import type { HistoryState, History, Mutations } from "./types";
import { HistoryMutation } from "./types";

export const mutations: MutationTree<HistoryState> & Mutations = {
  [HistoryMutation.ADD]: (state, payload: History): void => {
    payload.id = state.histories.length + 1;
    state.histories.push(payload);
  },
  [HistoryMutation.DELETE]: (state): void => {
    state.histories = [];
  },
};
