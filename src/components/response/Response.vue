<template>
  <div>
    <HeaderTab :tabs="tabs" @setCurrentIndex="updateCurrentTab" />
    <Data v-show="isSelected(0)" />
    <History v-show="isSelected(1)" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

import type { TabParameter as Tab } from "@/types/index";
import HeaderTab from "../HeaderTab.vue";
import Data from "./Data.vue";
import History from "./History.vue";

export default defineComponent({
  name: "response-component",
  components: {
    HeaderTab,
    Data,
    History,
  },
  data() {
    return {
      currentTabIndex: 0,
      tabs: [
        { type: "Response", icons: "fa-reply" },
        { type: "History", icons: "fa-timeline" },
      ] as Tab[],
    };
  },
  methods: {
    isSelected(tabIndex: number): boolean {
      return tabIndex == this.currentTabIndex;
    },
    updateCurrentTab(newValue: number) {
      this.currentTabIndex = newValue;
    },
  },
});
</script>
<style lang="scss" scoped>
.container-response {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
