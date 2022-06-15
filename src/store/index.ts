import { createStore } from "vuex";

const store = createStore({
  state: {
    timer: "",
  },
  getters: {
    getTimer(state): string {
      return state.timer;
    },
  },
  mutations: {
    updateTimer(state, payload): void {
      state.timer = payload.time;
    },
  },
});

export default store;
