import type { ParameterState } from "@/store/modules/param/types";

export enum HistoryMutation {
  ADD_HISTORY = "ADD_HISTORY",
  DELETE_HISTORY = "DELETE_HISTORY",
}

export type Mutations<S = HistoryState> = {
  [HistoryMutation.ADD_HISTORY](state: S, payload: History): void;
  [HistoryMutation.DELETE_HISTORY](state: S): void;
};

export type Getters<S = HistoryState> = {
  getHistories(state: S): History[];
  getInformationsById(state: S): (id: number) => Informations | undefined;
  getReversed(state: S): Informations[];
  getInformations(state: S): Informations[];
};

export type Informations = {
  id: number;
  history: History;
  parameters: ParameterState;
};

export type History = {
  time: string;
  httpCode: number;
  data: string;
  request: string;
  method: string;
};

export type HistoryState = {
  histories: Array<Informations>;
};

export const state: HistoryState = {
  histories: [
    {
      id: 0,

      history: {
        time: "0",
        httpCode: 200,
        data: "string",
        request: "https://jsonplaceholder.typicode.com/posts/1",
        method: "GET",
      },
      parameters: {
        authorization: [],
        queries: [],
        headers: [],
        body: "",
      },
    },
  ],
};
