<template>
  <div>
    <p>Response {{ displayTime }}</p>
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
  computed: {
    displayTime(): string {
      const time: string = this.$store.getters.getTimer;
      return time == "" ? time : `en ${time}s`;
    },
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
