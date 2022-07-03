import type { MutationTree } from "vuex";
import type {
  Param,
  Options,
  ParameterState,
  Mutations,
  TypeTabs,
} from "./types";
import { ParameterMutation } from "./types";

let id = 0;

export const mutations: MutationTree<ParameterState> & Mutations = {
  [ParameterMutation.UPDATE_VALUE]: (state, payload: Options): void => {
    switch (payload.type) {
      case "Headers":
        state.headers[payload.index].value = payload.value!;
        break;
      case "Authorization":
        state.authorization[payload.index].value = payload.value!;
        break;
      case "Query":
        state.queries[payload.index].value = payload.value!;
    }
  },
  [ParameterMutation.UPDATE_KEY]: (state, payload: Options): void => {
    switch (payload.type) {
      case "Headers":
        state.headers[payload.index].key = payload.key!;
        break;
      case "Authorization":
        state.authorization[payload.index].key = payload.key!;
        break;
      case "Query":
        state.queries[payload.index].key = payload.key!;
        break;
    }
  },
  [ParameterMutation.ADD]: (state, type: TypeTabs): void => {
    const emptyParam: Param = {
      id: id++,
      key: "",
      value: "",
      active: true,
    };

    switch (type) {
      case "Headers":
        state.headers.push(emptyParam);
        break;
      case "Authorization":
        state.authorization.push(emptyParam);
        break;
      case "Query":
        state.queries.push(emptyParam);
        break;
    }
  },
  [ParameterMutation.DELETE]: (state, options: Options): void => {
    switch (options.type) {
      case "Headers":
        state.headers.splice(options.index, 1);
        break;
      case "Authorization":
        state.authorization.splice(options.index, 1);
        break;
      case "Query":
        state.queries.splice(options.index, 1);
        break;
    }
  },
  [ParameterMutation.UPDATE_ACTIVE]: (
    state: ParameterState,
    options: Options
  ): void => {
    switch (options.type) {
      case "Headers":
        state.headers[options.index].active =
          !state.headers[options.index].active;
        break;
      case "Authorization":
        state.authorization[options.index].active =
          !state.authorization[options.index].active;
        break;
      case "Query":
        state.queries[options.index].active =
          !state.queries[options.index].active;
        break;
    }
  },
  [ParameterMutation.UPDATE_BODY]: (
    state: ParameterState,
    body: string
  ): void => {
    state.body = body;
  },
};
