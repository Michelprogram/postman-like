<template>
  <div>
    <ul class="methods">
      <li :class="isSelected('GET')" @click="method = 'GET'">GET</li>
      <li :class="isSelected('POST')" @click="method = 'POST'">POST</li>
      <li :class="isSelected('DELETE')" @click="method = 'DELETE'">DELETE</li>
      <li :class="isSelected('PUT')" @click="method = 'PUT'">PUT</li>
      <li :class="isSelected('OPTIONS')" @click="method = 'OPTIONS'">
        OPTIONS
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { StatsMutation } from "@/store/modules/stats/types";
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
  name: "methods-component",
  computed: {
    method: {
      get(): string {
        return this.$store.getters.getMethod;
      },
      set(value: string): void {
        this.$store.commit(StatsMutation.METHOD_STATS, value);
      },
    },
  },
  methods: {
    isSelected(methods: string): string {
      return methods == this.method
        ? "badge badge--success"
        : "badge badge--dark";
    },
  },
});
</script>
<style lang="scss">
@use "../assets/variables" as color;

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
