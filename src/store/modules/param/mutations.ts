import type { MutationTree } from "vuex";
import type { Param, Options, ParameterState, Mutations } from "./types";
import { ParameterMutation } from "./types";

let id = 0;

export const mutations: MutationTree<ParameterState> & Mutations = {
  [ParameterMutation.UPDATE_VALUE]: (state, payload: Options): void => {
    const value: string = payload.value!;
    state.queries[payload.index].value = value;
  },
  [ParameterMutation.UPDATE_KEY]: (state, payload: Options): void => {
    const key: string = payload.key!;
    state.queries[payload.index].key = key;
  },
  [ParameterMutation.ADD]: (state): void => {
    const emptyParam: Param = {
      id: id++,
      key: "",
      value: "",
    };
    state.queries.push(emptyParam);
  },
  [ParameterMutation.DELETE]: (state, payload: Options): void => {
    state.queries.splice(payload.index, 1);
  },
};
