export type Param = {
  id: number;
  key: string;
  value: string;
  active: boolean;
};

export type Options = {
  index: number;
  key?: string;
  value?: string;
  type: TypeTabs;
};

export type TypeTabs =
  | "Headers"
  | "Authorization"
  | "Query"
  | "Body"
  | "Response"
  | "History";

export type ParameterState = {
  headers: Array<Param>;
  authorization: Array<Param>;
  queries: Array<Param>;
  body: string;
};

export const state: ParameterState = {
  queries: [],
  headers: [
    {
      id: 0,
      key: "Accept",
      value: "*/*",
      active: true,
    },
    {
      id: 1,
      key: "Content-type",
      value: "application/json; charset=utf-8",
      active: true,
    },
  ],
  authorization: [],
  body: "",
};

export enum ParameterMutation {
  UPDATE_VALUE = "UPDATE_VALUE",
  UPDATE_KEY = "UPDATE_KEY",
  UPDATE_ACTIVE = "UPDATE_ACTIVE",
  UPDATE_BODY = "UPDATE_BODY",
  ADD = "ADD",
  DELETE = "DELETE",
}

export interface Getters {
  getParameterById(state: ParameterState, id: number): Param;
  getParameters(state: ParameterState): ParameterState;
  getParametersString(state: ParameterState): string;
  getHeaders(state: ParameterState): Param[];
  getByType(state: ParameterState): (type: TypeTabs) => Param[] | string;
  getSizeByType(state: ParameterState): (type: TypeTabs) => number;
}

export interface Mutations {
  [ParameterMutation.UPDATE_VALUE](
    state: ParameterState,
    options: Options
  ): void;
  [ParameterMutation.UPDATE_KEY](state: ParameterState, options: Options): void;
  [ParameterMutation.ADD](state: ParameterState, type: TypeTabs): void;
  [ParameterMutation.DELETE](state: ParameterState, options: Options): void;
  [ParameterMutation.UPDATE_ACTIVE](
    state: ParameterState,
    options: Options
  ): void;
  [ParameterMutation.UPDATE_BODY](state: ParameterState, body: string): void;
}
