<template>
  <div>
    <ul class="methods">
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
      methods_select: this.$store.getters["method/method"],
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
      this.$store.commit("method/method", { method: methods });
    },
  },
});
</script>
<style lang="scss">
@use "../assets/variables" as color;

@import "sierra-library/lib/index";

.methods {
  display: flex;
  justify-content: space-between;
  .badge {
    cursor: pointer;
    transition: background-color 0.5s ease-in;

    &--dark:hover {
      background-color: color.$dark-blue-2;
    }

    &--success {
      background-color: color.$green-light;
    }
  }
}
</style>
