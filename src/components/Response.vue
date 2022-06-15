<template>
  <div>
    <p>Response en {{ this.$store.getters.getTimer }} s</p>
    <pre>{{ response }}</pre>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
  name: "response-component",
  props: {
    response: String,
  },
});
</script>
<style lang="scss" scoped>
@import "sierra-library/lib/index";
pre {
  color: white;
  background-color: #18232f;
}
</style>
