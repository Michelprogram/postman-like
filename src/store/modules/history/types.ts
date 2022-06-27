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
  getHistoryById(state: S, id: number): History | undefined;
  getReversed(state: S): History[];
};

export type History = {
  id: number;
  time: string;
  httpCode: number;
  data: string;
  request: string;
  method: string;
};

export type HistoryState = {
  histories: Array<History>;
};

export const state: HistoryState = {
  histories: [
    {
      id: 0,
      time: "0",
      httpCode: 200,
      data: "string",
      request: "https://jsonplaceholder.typicode.com/posts/1",
      method: "GET",
    },
  ],
};
