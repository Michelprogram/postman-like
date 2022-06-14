<template>
  <div>
    <ul>
      <li :class="isSelected('GET')" @click="setMethods('GET')">GET</li>
      <li :class="isSelected('POST')" @click="setMethods('POST')">POST</li>
      <li :class="isSelected('DELETE')" @click="setMethods('DELETE')">
        DELETE
      </li>
      <li :class="isSelected('PUT')" @click="setMethods('PUT')">PUT</li>
      <li :class="isSelected('OPTIONS')" @click="setMethods('OPTIONS')">
        OPTIONS
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
  name: "methods-component",
  data() {
    return {
      methods_select: "GET",
    };
  },
  methods: {
    isSelected(methods: string): string {
      return methods == this.methods_select
        ? "badge badge--success"
        : "badge badge--dark";
    },
    setMethods(methods: string): void {
      this.methods_select = methods;
      this.$emit("methods", methods);
      console.log("update");
    },
  },
});
</script>
<style lang="scss">
@import "sierra-library/lib/index";

ul {
  .badge {
    cursor: pointer;
    transition: background-color 0.5s ease-in;

    &--dark:hover {
      background-color: hsl(212, 12%, 49%);
    }
  }
}
</style>
