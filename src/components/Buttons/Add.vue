<template>
  <div
    class="green w-90 h-10 rounded-lg ml-5 mr-5 flex items-center justify-center cursor-pointer"
    @click="add"
  >
    <font-awesome-icon
      class="text-white w-11 h-11"
      :icon="'fa-solid ' + 'fa-plus'"
    />
  </div>
</template>
<script lang="ts">
import { ParameterMutation, type TypeTabs } from "@/store/modules/param/types";
import { defineComponent, type PropType } from "@vue/runtime-core";
export default defineComponent({
  name: "add-button",
  props: {
    type: {
      type: Object as PropType<TypeTabs>,
      required: true,
    },
  },
  methods: {
    add(): void {
      this.$store.commit(ParameterMutation.ADD, this.type);
    },
  },
});
</script>
<style lang="scss" scoped>
@use "@/assets/variables/index.scss" as color;
.green {
  background-color: color.$green-light;
  border-color: color.$green-light;
}
</style>
