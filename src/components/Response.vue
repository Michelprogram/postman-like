<template>
  <div>
    <p>Réponse {{ response }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
  name: "response-component",
  props: {
    response: Object,
  },
});
</script>
<style lang="scss" scoped>
@import "sierra-library/lib/index";
p {
  color: black;
  background: white;
}
</style>
