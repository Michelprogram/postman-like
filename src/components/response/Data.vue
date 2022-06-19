<template>
  <div class="container-data">
    <div class="informations">
      <p>Time {{ displayTime }}</p>
      <Copy class="copy-content" @click="copy()" />
    </div>
    <div class="json-data">
      <pre :class="classCopied">{{
        this.$store.getters["response/response"]
      }}</pre>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Copy from "@/components/icons/Copy.vue";
export default defineComponent({
  name: "data-component",
  components: {
    Copy,
  },
  data() {
    return {
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
      return time == "" || time == "0.00" ? "" : time;
    },
    classCopied(): string {
      return this.copied ? "copied" : "";
    },
  },
});
</script>
<style lang="scss" scoped>
@import "sierra-library/lib/index";

.container-data {
  display: flex;
  flex-direction: column;
  overflow: scroll;
  height: 100%;
  position: relative;

  .informations {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    text-align: center;

    p {
      margin: 0;
    }
    .copy-content {
      width: 30px;
      cursor: pointer;
      z-index: 0;
    }
  }

  .json-data {
    z-index: -1;
    background-color: #18232f;
    height: auto;

    pre {
      display: block;
      color: white;
      height: 100%;
      max-width: 500px;
      min-width: 100%;
      border-radius: 3px;
      transition: filter 0.5s ease-in;
      white-space: pre-wrap;
    }

    .copied {
      filter: blur(2px);
    }
  }
}
</style>
