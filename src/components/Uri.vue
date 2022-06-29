<template>
  <div>
    <div class="mt-5 mb-5">
      <div class="relative">
        <div
          class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
        >
          <font-awesome-icon icon="fa-solid fa-globe" />
        </div>
        <input
          type="search"
          id="search"
          class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white focus:outline-none"
          placeholder="Your URI"
          required
          v-model="uri"
        />
        <button
          type="submit"
          class="text-white absolute right-2.5 bottom-2.5 bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700"
          @click="sendRequest()"
        >
          Send
        </button>
      </div>
    </div>

    <div v-if="animate">
      <WaitingVue @cancel="cancelRequest()" />
    </div>
  </div>
</template>

<script lang="ts">
import type IHistory from "@/interfaces/history";
import { HistoryMutation } from "@/store/modules/history/types";
import { StatsMutation } from "@/store/modules/stats/types";
import { defineComponent } from "@vue/runtime-core";
import WaitingVue from "./Waiting.vue";

export default defineComponent({
  name: "URI",
  data() {
    return {
      uri: "https://jsonplaceholder.typicode.com/posts/1",
      animate: false,
      timer: 0,
      controller: {} as AbortController,
    };
  },
  methods: {
    sendRequest() {
      this.triggerAnimate();
      this.controller = new AbortController();
      const signal = this.controller.signal;
      let rep = "";

      /*       this.timer = setTimeout(() => {
        this.triggerAnimate();
      }, 100000); */
      var myInit = {
        method: this.method,
        mode: "cors",
        cache: "default",
      };
      fetch(this.fullUri, {
        method: this.method,
        signal: signal,
      })
        .then((response) => {
          response.json().then((c: any) => {
            const history: IHistory = {
              time: this.timer + "",
              httpCode: 200,
              data: JSON.stringify(c, undefined, 2),
              request: this.uri,
              method: this.method,
            };
            this.$store.commit(HistoryMutation.ADD_HISTORY, history);
            this.$store.commit(
              StatsMutation.RESPONSE_STATS,
              JSON.stringify(c, undefined, 2)
            );
          });
        })
        .catch((r) => {
          console.log("Error :", r);
        })
        .finally(() => {
          this.triggerAnimate();
        });
    },
    triggerAnimate() {
      this.animate = !this.animate;
    },
    cancelRequest() {
      this.controller.abort();
    },
  },
  computed: {
    fullUri(): string {
      console.log(this.uri);
      return this.uri + this.$store.getters.getParametersString;
    },
    method(): string {
      return this.$store.getters.getMethod;
    },
  },
  components: { WaitingVue },
});
</script>
<style lang="scss" scoped>
@use "../assets/variables" as color;

button {
  background-color: color.$green-light;
  transition: background-color 0.5s ease-in;
}
</style>
