import type RootState from "@/store/types";
import type { GetterTree } from "vuex";
import type { Getters, Param, ParameterState, TypeTabs } from "./types";

export const getters: GetterTree<ParameterState, RootState> & Getters = {
  getParameterById: (state, index: number): Param => {
    return state.queries[index];
  },
  getParameters: (state): ParameterState => {
    return state;
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
    (type: TypeTabs): Param[] | string => {
      switch (type) {
        case "Headers":
          return state.headers;
        case "Authorization":
          return state.authorization;
        case "Query":
          return state.queries;
        case "Body":
          return state.body;
        default:
          return [];
      }
    },
  getSizeByType:
    (state) =>
    (type): number => {
      switch (type) {
        case "Headers":
          return state.headers.length;
        case "Authorization":
          return state.authorization.length;
        case "Query":
          return state.queries.length;
        default:
          return 0;
      }
    },
};
