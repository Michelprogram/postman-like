<template>
  <div>
    <div class="formCollapsed">
      <div class="input formCollapsed-item formCollapsed-itemPrimary">
        <input v-model="uri" id="test7" placeholder="url" type="text" />
      </div>

      <button
        class="formCollapsed-item button button-primary"
        @click="sendRequest()"
      >
        Send
      </button>
    </div>

    <div v-if="animate">
      <WaitingVue @cancel="cancelRequest()" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import WaitingVue from "./Waiting.vue";

export default defineComponent({
  name: "URI",
  data() {
    return {
      uri: "https://jsonplaceholder.typicode.com/todos/1",
      animate: false,
      timer: 0,
      controller: {} as AbortController,
      method: this.$store.getters["method/method"],
    };
  },
  methods: {
    sendRequest() {
      this.triggerAnimate();
      this.controller = new AbortController();
      const signal = this.controller.signal;

      /*       this.timer = setTimeout(() => {
        this.triggerAnimate();
      }, 100000); */
      var myInit = {
        method: this.method,
        mode: "cors",
        cache: "default",
      };
      fetch(this.uri, {
        method: this.method,
        signal: signal,
      })
        .then((response) => {
          response.json().then((c: any) => {
            this.$store.commit("response/response", {
              data: JSON.stringify(c, undefined, 2),
            });
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
  components: { WaitingVue },
});
</script>
<style lang="scss">
@import "sierra-library/lib/index";
</style>
