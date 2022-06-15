<template>
  <div>
    <p>Response {{ displayTime }}</p>
    <pre>{{ this.$store.getters["response/response"] }}</pre>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
  name: "response-component",
  computed: {
    displayTime(): string {
      const time: string = this.$store.getters["timer/timer"];
      console.log(time);
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
