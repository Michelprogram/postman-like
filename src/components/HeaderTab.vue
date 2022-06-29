<template>
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
          <span v-if="isSizable(tab.type)" class="ml-1 text-xs number-items">
            ({{ size(tab.type) }})
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import type { TypeTabs } from "@/store/modules/param/types";
import type { TabParameter as Tab } from "@/types/index";
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
  name: "header-tab",
  props: {
    currentTabIndex: Number,
    sizeable: Boolean,
    tabs: Array as () => Tab[],
  },
  data() {
    return {
      indexSelected: 0,
    };
  },
  methods: {
    selectedIndex(index: number): void {
      this.$emit("setCurrentIndex", index);
      this.indexSelected = index;
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
    isSelected(tabIndex: number): boolean {
      return tabIndex == this.indexSelected;
    },
    isSelectedClassSvg(index: number): string {
      const selectedClass = "mr-2 w-5 h-5 selected-color";
      const notSelectedClass =
        "mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300";

      return this.isSelected(index) ? selectedClass : notSelectedClass;
    },
    size(type: TypeTabs): number {
      return this.$store.getters.getSizeByType(type);
    },
    isSizable(type: TypeTabs): boolean {
      return (
        !(type == "Body" || type == "Response" || type == "History") &&
        this.sizeable
      );
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
