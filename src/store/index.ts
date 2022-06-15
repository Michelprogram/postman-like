import response from "./modules/response";
import method from "./modules/method";
import timer from "./modules/timer";
import { createStore } from "vuex";

export default createStore({
  modules: {
    response,
    method,
    timer,
  },
});
