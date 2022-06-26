import type RootState from "@/store/types";
import type { Module } from "vuex";
import type { ParameterState } from "./types";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { state } from "./types";

export const parameters: Module<ParameterState, RootState> = {
  state,
  getters,
  mutations,
};
