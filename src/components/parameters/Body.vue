<template>
  <div>
    <Title title="Body" :description="description" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Title from "./Title.vue";
export default defineComponent({
  name: "body-component",
  data() {
    return {
      description:
        "Is data exchange with server, depends on content-type (JSON)",
    };
  },
  components: { Title },
});
</script>
<style lang="scss"></style>
