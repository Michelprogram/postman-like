<template>
  <div>
    <p>Response {{ displayTime }}</p>
    <div class="json-data">
      <pre :class="classCopied">{{
        this.$store.getters["response/response"]
      }}</pre>
      <span class="copy-content" @click="copy()"
        ><img :src="img" alt=""
      /></span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Copy from "../assets/copy.svg";
export default defineComponent({
  name: "response-component",
  data() {
    return {
      img: Copy,
      copied: false,
    };
  },
  methods: {
    copy() {
      this.copied = true;
      navigator.clipboard.writeText(this.$store.getters["response/response"]);
      setTimeout(() => (this.copied = false), 500);
    },
  },
  computed: {
    displayTime(): string {
      const time: string = this.$store.getters["timer/timer"];
      return time == "" || time == "0.00" ? "" : `en ${time}s`;
    },
    classCopied(): string {
      return this.copied ? "copied" : "";
    },
  },
});
</script>
<style lang="scss" scoped>
@import "sierra-library/lib/index";

div {
  width: 100%;
  max-width: 100%;

  .json-data {
    position: relative;
    pre {
      color: white;
      background-color: #18232f;
      overflow: scroll;
      max-height: 500px;
      min-height: 300px;
      border-radius: 3px;
      z-index: -10;
      transition: filter 0.5s ease-in;
    }

    .copied {
      filter: blur(2px);
    }

    .copy-content {
      position: absolute;
      width: 30px;
      top: 20px;
      right: 20px;
      cursor: pointer;
    }
  }
}
</style>
