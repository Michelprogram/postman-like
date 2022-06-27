<template>
  <div class="container-data flex flex-col position-relative">
    <div class="informations flex justify-between items-center">
      <p>Time {{ time }}s</p>
      <font-awesome-icon
        class="cursor-pointer"
        icon="fa-solid fa-copy"
        @click="copy()"
      />
      <a
        :href="'data:' + exportJson"
        download="data.json"
        class="hover:bg-transparent"
      >
        <font-awesome-icon icon="fa-solid fa-file-export" />
      </a>
    </div>
    <div
      class="dark:border-gray-600 dark:placeholder-gray-400 dark:text-white bg-gray-50 dark:bg-gray-800 block rounded-sm"
    >
      <pre :class="classCopied">{{ response }}</pre>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
  name: "data-component",
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
      return this.copied ? "copied pre-content" : "pre-content";
    },
    exportJson(): string {
      const data = this.$store.getters.getResponse;
      return "text/json;charset=utf-8," + encodeURIComponent(data);
    },
  },
});
</script>
<style lang="scss" scoped>
@use "../../assets/variables" as color;

.container-data {
  height: 100%;

  .informations {
    height: 100px;
    text-align: center;
  }

  .pre-content {
    border-radius: 3px;
    transition: filter 0.5s ease-in;
    white-space: pre-wrap;
  }

  .copied {
    filter: blur(2px);
  }
}
</style>
