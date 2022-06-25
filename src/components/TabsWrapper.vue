<template>
  <div>
    <div class="border-b border-gray-200 dark:border-gray-700">
      <ul
        class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400"
      >
        <li
          v-for="(tab, index) in tabs"
          :key="index"
          class="mr-2"
          @click="selectedIndex(index)"
        >
          <a href="#" :class="isSelectedClass(index)">
            <font-awesome-icon
              :icon="'fa-solid ' + tab.icons"
              :class="isSelectedClassSvg(index)"
            />
            {{ tab.title }}
          </a>
        </li>
      </ul>
    </div>

    <keep-alive>
      <component
        v-for="(tab, index) in tabs"
        :key="index"
        v-show="isSelected(index)"
        :is="tab.component"
      ></component>
    </keep-alive>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import type { ITab } from "@/interfaces/tab";
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
  },
});
</script>
<style lang="scss" scoped>
@use "../assets/variables" as color;
.selected-color {
  color: color.$green-light;
  border-color: color.$green-light;
}
</style>
