import { parameters } from "./modules/param/index";
import { history } from "./modules/history";
import { stats } from "./modules/stats";
import type RootState from "./types";
import Vuex, { type StoreOptions } from "vuex";

const store: StoreOptions<RootState> = {
  state: {
    version: "1.0.0",
  },
  modules: {
    parameters,
    history,
    stats,
  },
};

export default new Vuex.Store<RootState>(store);
