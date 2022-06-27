<template>
  <div>
    <div class="border-b border-gray-200 dark:border-gray-700 cursor-pointer">
      <ul
        class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400"
      >
        <li
          v-for="(tab, index) in tabs"
          :key="index"
          class="mr-2"
          @click="selectedIndex(index)"
        >
          <a :class="isSelectedClass(index)">
            <font-awesome-icon
              :icon="'fa-solid ' + tab.icons"
              :class="isSelectedClassSvg(index)"
            />
            {{ tab.type }}
          </a>
        </li>
      </ul>
    </div>

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
export default defineComponent({
  name: "tabs-parameters",
  components: {
    TabsContent,
    Body,
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
    isSelectedClass(tabIndex: number): string {
      let commonClass = "inline-flex p-4 rounded-t-lg border-b-2 group ";
      const notSelectedClass =
        "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ";
      const selectedClass = "selected-color active ";

      commonClass += this.isSelected(tabIndex)
        ? selectedClass
        : notSelectedClass;

      return commonClass;
    },
    isSelectedClassSvg(index: number): string {
      const selectedClass = "mr-2 w-5 h-5 selected-color";
      const notSelectedClass =
        "mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300";

      return this.isSelected(index) ? selectedClass : notSelectedClass;
    },
    selectedIndex(index: number): void {
      this.currentTabIndex = index;
    },
    isEmpty(tab: Tab): boolean {
      return tab.descritpion == "";
    },
  },
});
</script>
<style lang="scss" scoped>
@use "@/assets/variables/index.scss" as color;

.selected-color {
  color: color.$green-light;
  border-color: color.$green-light;
}
</style>
