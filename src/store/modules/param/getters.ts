import type RootState from "@/store/types";
import type { GetterTree } from "vuex";
import type { Getters, Param, ParameterState, TypeTabs } from "./types";

export const getters: GetterTree<ParameterState, RootState> & Getters = {
  getParameterById: (state, index: number): Param => {
    return state.queries[index];
  },
  getParameters: (state): Param[] => {
    return state.queries;
  },
  getHeaders: (state): Param[] => {
    return state.headers;
  },
  getParametersString: (state): string => {
    let res = "";
    for (let index = 0; index < state.queries.length; index++) {
      const element: Param = state.queries[index];
      res +=
        index == 0
          ? `?${element.key}=${element.value}`
          : `&${element.key}=${element.value}`;
    }
    return res;
  },
  getByType:
    (state) =>
    (type: TypeTabs): Param[] => {
      switch (type) {
        case "Headers":
          return state.headers;
        case "Authorization":
          return state.authorization;
        case "Query":
          return state.queries;
        default:
          return [];
      }
    },
};