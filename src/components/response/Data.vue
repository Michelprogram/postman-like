<template>
  <div class="container-data">
    <div class="informations">
      <p>Time {{ time }}</p>
      <Copy class="copy-content" @click="copy()" />
    </div>
    <div class="json-data">
      <pre :class="classCopied">{{ response }}</pre>
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
      navigator.clipboard.writeText(this.response);
      setTimeout(() => (this.copied = false), 500);
    },
  },
  computed: {
    time(): string {
      return this.$store.getters.getTimer;
    },
    response(): string {
      return this.$store.getters.getResponse;
    },
    classCopied(): string {
      return this.copied ? "copied" : "";
    },
  },
});
</script>
<style lang="scss" scoped>
@use "../../assets/variables" as color;

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
    background-color: color.$dark-blue-2;
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
