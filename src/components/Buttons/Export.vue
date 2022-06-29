<template>
  <div title="Export">
    <a :href="exportJ" download="data.json" class="hover:bg-transparent">
      <font-awesome-icon icon="fa-solid fa-file-export" />
    </a>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
  name: "Export-button",
  props: {
    requestData: String,
  },
  computed: {
    exportJ(): string {
      const prefix = "data:text/json;charset=utf-8,";
      const encoded = encodeURIComponent(this.requestData + "");
      return prefix + encoded;
    },
  },
});
</script>
<style lang="scss"></style>
