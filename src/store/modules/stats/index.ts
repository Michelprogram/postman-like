import type RootState from "@/store/types";
import type { Module } from "vuex";
import type { StatsState } from "./types";
import { getters } from "./getters";
import { mutations } from "./mutations";

export const stats: Module<StatsState, RootState> = {
  state: {
    method: "GET",
    response: "",
    timer: "",
  },
  getters,
  mutations,
};
