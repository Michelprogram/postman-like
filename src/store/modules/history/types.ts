export enum HistoryMutation {
  ADD_HISTORY = "ADD_HISTORY",
  DELETE_HISTORY = "DELETE_HISTORY",
}

export type Mutations<S = HistoryState> = {
  [HistoryMutation.ADD_HISTORY](state: S, payload: History): void;
  [HistoryMutation.DELETE_HISTORY](state: S): void;
};

export type Getters = {
  getHistories(state: HistoryState): History[];
  getHistoryById(state: HistoryState, id: number): History | undefined;
  getReversed(state: HistoryState): History[];
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
