<template>
  <div><ButtonBack :redirect="{ name: 'Home' }" orientation="Left" />CC</div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import ButtonBack from "@/components/response/ButtonBack.vue";

export default defineComponent({
  name: "info-history",
  components: {
    ButtonBack,
  },
  props: {
    id: Number,
  },
});
</script>
<style lang="scss"></style>
