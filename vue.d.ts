import { Store } from "vuex";
import { RooState } from "@/store/types";

declare module "@vue/runtime-core" {
  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<RooState>;
  }
}
