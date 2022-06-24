import type RootState from "@/store/types";
import type { Module } from "vuex";
import { getters } from "./getters";
import { mutations } from "./mutations";
import type { HistoryState } from "./types";
import { state } from "./types";

export const history: Module<HistoryState, RootState> = {
  state,
  getters,
  mutations,
};
