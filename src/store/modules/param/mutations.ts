import type { MutationTree } from "vuex";
import type { Param, Options, ParameterState, Mutations } from "./types";
import { ParameterMutation } from "./types";

let id = 0;

export const mutations: MutationTree<ParameterState> & Mutations = {
  [ParameterMutation.UPDATE_VALUE_PARAMETER]: (
    state,
    payload: Options
  ): void => {
    const value: string = payload.value!;
    state.queries[payload.index].value = value;
  },
  [ParameterMutation.UPDATE_KEY_PARAMETER]: (state, payload: Options): void => {
    const key: string = payload.key!;
    state.queries[payload.index].key = key;
  },
  [ParameterMutation.ADD_PARAMETER]: (state): void => {
    const emptyParam: Param = {
      id: id++,
      key: "",
      value: "",
    };
    state.queries.push(emptyParam);
  },
  [ParameterMutation.DELETE_PARAMETER]: (state, id: number): void => {
    state.queries.splice(id, 1);
  },
};
