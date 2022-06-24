import type { MutationTree } from "vuex";
import type { StatsState } from "./types";
import { StatsMutation } from "./types";
export const mutations: MutationTree<StatsState> = {
  [StatsMutation.METHOD_STATS]: (state, payload: string): void => {
    state.method = payload;
  },
  [StatsMutation.RESPONSE_STATS]: (state, payload: string): void => {
    state.response = payload;
  },
  [StatsMutation.TIMER_STATS]: (state, payload: string): void => {
    state.timer = payload;
  },
};
