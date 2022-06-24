import type RootState from "@/store/types";
import type { Module } from "vuex";
import type ParameterState from "./types";
import { getters } from "./getters";
import { mutations } from "./mutations";

export const parameters: Module<ParameterState, RootState> = {
  state: {
    queries: [],
  },
  getters,
  mutations,
};
