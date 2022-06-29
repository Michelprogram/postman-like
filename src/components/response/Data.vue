<template>
  <div class="container-data flex flex-col position-relative">
    <div class="informations flex justify-between items-center">
      <p>Time {{ time }}s</p>

      <Copy :requestData="response" />
      <Export :requestData="response" />
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
import Export from "@/components/Buttons/Export.vue";
import Copy from "@/components/Buttons/Copy.vue";
export default defineComponent({
  name: "data-component",
  components: {
    Export,
    Copy,
  },
  data() {
    return {
      copied: false,
    };
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
