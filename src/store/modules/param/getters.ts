import type RootState from "@/store/types";
import type { GetterTree } from "vuex";
import type { Getters, Param, ParameterState } from "./types";

export const getters: GetterTree<ParameterState, RootState> & Getters = {
  getParameterById: (state, index: number): Param => {
    return state.queries[index];
  },
  getParamerers: (state): Param[] => {
    return state.queries;
  },
};
