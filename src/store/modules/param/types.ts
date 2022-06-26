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
  | "Respone"
  | "History";

export type ParameterState = {
  headers: Array<Param>;
  authorization: Array<Param>;
  queries: Array<Param>;
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
      key: "User-agent",
      value:
        "Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/43.4",
      active: true,
    },
  ],
  authorization: [],
};

export enum ParameterMutation {
  UPDATE_VALUE = "UPDATE_VALUE",
  UPDATE_KEY = "UPDATE_KEY",
  UPDATE_ACTIVE = "UPDATE_ACTIVE",
  ADD = "ADD",
  DELETE = "DELETE",
}

export interface Getters {
  getParameterById(state: ParameterState, id: number): Param;
  getParameters(state: ParameterState): Param[];
  getParametersString(state: ParameterState): string;
  getHeaders(state: ParameterState): Param[];
  getByType(state: ParameterState): (type: TypeTabs) => Param[];
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
}