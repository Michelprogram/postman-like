import type { MutationTree } from "vuex";
import type { HistoryState, History, Mutations, Informations } from "./types";
import { HistoryMutation } from "./types";
import store from "@/store/index";

export const mutations: MutationTree<HistoryState> & Mutations = {
  [HistoryMutation.ADD_HISTORY]: (state, payload: History): void => {
    const obj: Informations = {
      id: state.histories.length + 1,
      history: payload,
      parameters: store.getters.getParameters,
    };
    state.histories.push(obj);
  },
  [HistoryMutation.DELETE_HISTORY]: (state): void => {
    state.histories = [];
  },
};
