<template>
  <div class="position-relative">
    <HeaderTab
      :tabs="tabs"
      @setCurrentIndex="updateCurrentTab"
      :sizeable="true"
    />

    <transition-group name="switch" tag="div">
      <TabsContent
        v-for="(tab, index) in tabs.slice(0, tabs.length - 1)"
        :key="index"
        :type="tab.type"
        :description="tab.descritpion"
        v-show="isSelected(index)"
      />
      <Body v-show="isSelected(tabs.length - 1)" />
    </transition-group>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Tabs from "@/constants/Tabs";
import TabsContent from "@/components/parameters/TabsContent.vue";
import Body from "@/components/parameters/Body.vue";
import HeaderTab from "../HeaderTab.vue";
export default defineComponent({
  name: "tabs-parameters",
  components: {
    TabsContent,
    Body,
    HeaderTab,
  },
  data() {
    return {
      currentTabIndex: 0,
      tabs: Tabs,
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
.switch-enter-from,
.switch-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
.switch-enter-active {
  transition: all 0.5s ease;
}
.switch-leave-active {
  position: absolute;
  transition: all 0.5s ease;
}

.swtich-move {
  transition: all 0.5s ease;
}
</style>
