import { Store } from "vuex";
import { RooState } from "@/store/types";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<RooState>;
  }
}
