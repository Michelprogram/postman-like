<template>
  <router-link :to="redirect">
    <div class="green rounded-lg cursor-pointer text-center">
      <font-awesome-icon
        icon="fa-solid fa-arrow-right"
        :class="arrowOrientation"
      />
    </div>
  </router-link>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import type { Orientation } from "@/types/index";

export default defineComponent({
  name: "back-button",
  props: {
    redirect: Object,
    orientation: Object as () => Orientation,
  },
  computed: {
    arrowOrientation(): string {
      const left = "text-white rotate-180";
      const right = "text-white";
      return this.orientation == "Left" ? left : right;
    },
  },
});
</script>
<style lang="scss" scoped>
@use "../../assets/variables" as color;

.green {
  background-color: color.$green-light;
}
</style>
