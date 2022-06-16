<template>
  <div>
    <div class="tabs">
      <a
        href="#"
        v-for="(tab, index) in tabs"
        :key="index"
        class="tabs-item"
        @click="selectedIndex(index)"
        >{{ tab.title }}</a
      >
    </div>
    <div v-for="(tab, index) in tabs" :key="index">
      <keep-alive>
        <component v-show="isSelected(index)" :is="tab.component"></component>
      </keep-alive>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import type ITab from "@/interfaces/tab";
export default defineComponent({
  name: "tabs-wrapper",
  props: {
    tabs: Object as () => Array<ITab>,
  },
  data() {
    return {
      currentTabIndex: 0,
    };
  },
  methods: {
    isSelected(tabIndex: number): boolean {
      return tabIndex == this.currentTabIndex;
    },
    selectedIndex(index: number): void {
      this.currentTabIndex = index;
    },
  },
});
</script>
<style lang="scss">
@import "sierra-library/lib/index";
.tabs-item {
  &:hover {
    background-color: transparent;
  }
}
</style>
