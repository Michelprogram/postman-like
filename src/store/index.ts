import response from "./modules/response";
import method from "./modules/method";
import timer from "./modules/timer";
import history from "./modules/history";
import { createStore } from "vuex";

export default createStore({
  modules: {
    response,
    method,
    timer,
    history,
  },
});
