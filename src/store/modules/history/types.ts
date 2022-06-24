export enum HistoryMutation {
  ADD = "ADD",
  DELETE = "DELETE",
}

export type Mutations<S = HistoryState> = {
  [HistoryMutation.ADD](state: S, payload: History): void;
  [HistoryMutation.DELETE](state: S): void;
};

export type Getters = {
  getHistories(state: HistoryState): History[];
  getHistoryById(state: HistoryState, id: number): History | undefined;
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
  histories: [],
};
