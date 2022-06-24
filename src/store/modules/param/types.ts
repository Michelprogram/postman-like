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
  UPDATE_VALUE = "UPDATE_VALUE",
  UPDATE_KEY = "UPDATE_KEY",
  ADD = "ADD",
  DELETE = "DELETE",
}

export interface Getters {
  getParameterById(state: ParameterState, id: number): Param;
  getParamerers(state: ParameterState): Param[];
}

export interface Mutations {
  [ParameterMutation.UPDATE_VALUE](
    state: ParameterState,
    options: Options
  ): void;
  [ParameterMutation.UPDATE_KEY](state: ParameterState, options: Options): void;
  [ParameterMutation.ADD](state: ParameterState): void;
  [ParameterMutation.DELETE](state: ParameterState, options: Options): void;
}
