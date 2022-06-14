<template>
  <div>
    <div class="formCollapsed">
      <div class="input formCollapsed-item formCollapsed-itemPrimary">
        <input id="test7" placeholder="url" type="text" />
      </div>

      <button class="formCollapsed-item button button-primary">Send</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "URI",
});
</script>
<style lang="scss">
@import "sierra-library/lib/index";
</style>
