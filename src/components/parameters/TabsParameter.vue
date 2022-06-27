<template>
  <div>
    <HeaderTab :tabs="tabs" @setCurrentIndex="updateCurrentTab" />

    <TabsContent
      v-for="(tab, index) in tabs.slice(0, tabs.length - 1)"
      :key="index"
      :type="tab.type"
      :description="tab.descritpion"
      v-show="isSelected(index)"
    />
    <Body v-show="isSelected(tabs.length - 1)" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import type { TabParameter as Tab } from "@/types/index";
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
      tabs: [
        {
          type: "Headers",
          descritpion:
            "Let the client and the server pass additional information.",
          icons: "fa-book-open",
        },
        {
          type: "Authorization",
          descritpion:
            "HTTP provides a general framework for access control and authentication",
          icons: "fa-address-card",
        },
        {
          type: "Query",
          descritpion:
            "Is a part of a URL that assigns values to specified parameters",
          icons: "fa-gear",
        },
        {
          type: "Body",
          descritpion: "null",
          icons: "fa-sitemap",
        },
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
