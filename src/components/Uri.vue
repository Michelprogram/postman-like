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
  props: {
    methods: String,
  },
  data() {
    return {
      uri: "https://jsonplaceholder.typicode.com/todos/1",
      animate: false,
      timer: 0,
    };
  },
  methods: {
    sendRequest() {
      this.triggerAnimate();

      this.timer = setTimeout(() => {
        this.triggerAnimate();
      }, 100000);
      /*       var myInit = {
        method: this.methods,
        mode: "cors",
        cache: "default",
      };

      this.triggerAnimate();
      fetch(this.uri, {
        method: this.methods,
      })
        .then((response) => {
          this.$emit("response", response.status);
        })
        .catch((r) => {
          console.log(r);
        })
        .finally(() => {
          this.triggerAnimate();
        }); */
    },
    triggerAnimate() {
      this.animate = !this.animate;
    },
    cancelRequest() {
      this.triggerAnimate();
      clearTimeout(this.timer);
    },
    emit() {
      this.$emit("response", "ttt");
    },
  },
  components: { WaitingVue },
});
</script>
<style lang="scss">
@import "sierra-library/lib/index";
</style>
