<template>
  <router-link :to="{ name: 'Home' }" />
  <router-view v-slot="{ Component }">
    <transition :name="transitionName" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "app",
  data() {
    return {
      transitionName: "slide-left",
    };
  },
  watch: {
    $route(_, from) {
      this.transitionName =
        from.name == "HistoryDetail" ? "slide-right" : "slide-left";
    },
  },
});
</script>

<style lang="scss">
@use "@/assets/mixins";

@import "@/assets/base.css";

.slide-left {
  @include mixins.slide("Left");
}

.slide-right {
  @include mixins.slide("Right");
}
</style>
