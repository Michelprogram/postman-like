export type StatsState = {
  method: string;
  response: string;
  timer: string;
};

export const state: StatsState = {
  method: "GET",
  response: "",
  timer: "",
};

export enum StatsMutation {
  METHOD = "METHOD",
  RESPONSE = "RESPONSE",
  TIMER = "TIMER",
}

export interface Getters {
  getMethod(state: StatsState): string;
  getResponse(state: StatsState): string;
  getTimer(state: StatsState): string;
}

export interface Mutations {
  [StatsMutation.METHOD](state: StatsState, payload: string): void;
  [StatsMutation.RESPONSE](state: StatsState, payload: string): void;
  [StatsMutation.TIMER](state: StatsState, payload: string): void;
}
