export type Param = {
  id: number;
  key: string;
  value: string;
};

export type Options = {
  index: number;
  key?: string;
  value?: string;
};

export type ParameterState = {
  queries: Array<Param>;
};

export const state: ParameterState = {
  queries: [],
};

export enum ParameterMutation {
  UPDATE_VALUE_PARAMETER = "UPDATE_VALUE_PARAMETER",
  UPDATE_KEY_PARAMETER = "UPDATE_KEY_PARAMETER",
  ADD_PARAMETER = "ADD_PARAMETER",
  DELETE_PARAMETER = "DELETE_PARAMETER",
}

export interface Getters {
  getParameterById(state: ParameterState, id: number): Param;
  getParamerers(state: ParameterState): Param[];
}

export interface Mutations {
  [ParameterMutation.UPDATE_VALUE_PARAMETER](
    state: ParameterState,
    options: Options
  ): void;
  [ParameterMutation.UPDATE_KEY_PARAMETER](
    state: ParameterState,
    options: Options
  ): void;
  [ParameterMutation.ADD_PARAMETER](state: ParameterState): void;
  [ParameterMutation.DELETE_PARAMETER](state: ParameterState, id: number): void;
}
