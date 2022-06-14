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
    <p>Methods : {{ methods }}</p>
    <div v-if="animate">
      <WaitingVue />
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
      uri: "",
      animate: false,
    };
  },
  methods: {
    sendRequest() {
      var myInit = {
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
        });
    },
    triggerAnimate() {
      this.animate = !this.animate;
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
