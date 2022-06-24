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
  METHOD_STATS = "METHOD_STATS",
  RESPONSE_STATS = "RESPONSE_STATS",
  TIMER_STATS = "TIMER_STATS",
}

export interface Getters {
  getMethod(state: StatsState): string;
  getResponse(state: StatsState): string;
  getTimer(state: StatsState): string;
}

export interface Mutations {
  [StatsMutation.METHOD_STATS](state: StatsState, payload: string): void;
  [StatsMutation.RESPONSE_STATS](state: StatsState, payload: string): void;
  [StatsMutation.TIMER_STATS](state: StatsState, payload: string): void;
}
