<template>
  <div class="text-white-900 mt-5 mb-5">
    <h1
      class="text-xl tracking-tight font-extrabold sm:text-xl md:text-4xl mb-2"
    >
      {{ title }}
    </h1>
    <p class="text-3xs italic">{{ description }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
  name: "title-tabs",
  props: {
    title: String,
    description: String,
  },
});
</script>
<style lang="scss"></style>
