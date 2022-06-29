<template>
  <div title="Copy">
    <font-awesome-icon
      class="cursor-pointer"
      icon="fa-solid fa-copy"
      @click="copy"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
  name: "Copy-button",
  props: {
    requestData: String,
  },
  methods: {
    copy() {
      navigator.clipboard.writeText(this.requestData + "");
    },
  },
});
</script>
<style lang="scss"></style>
