<template>
  <div>
    <div class="loadingSpinner">
      <span class="loadingSpinner-inner"></span>
      <span class="loadingSpinner-inner"></span>
      <span class="loadingSpinner-inner"></span>
      <span class="loadingSpinner-inner"></span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
  name: "waiting-component",
});
</script>
<style lang="scss">
@import "sierra-library/lib/index";
</style>
