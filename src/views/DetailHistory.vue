<template>
  <div class="flex flex-col items-center h-fit-content gap-16 mt-14">
    <div class="flex justify-center items-center gap-8">
      <ButtonBack
        :redirect="{ name: 'Home' }"
        orientation="Left"
        class="text-2xl pl-3 pr-3 bg-green-light rounded-lg"
      />
      <h1 class="tracking-tight font-extrabold sm:text-xl md:text-6xl mb-2">
        History n°{{ id }}
      </h1>
    </div>
    <div class="flex justify-between w-4/5 border-b-2 border-green-light">
      <div>
        <p class="text-lg text-white">URL</p>
        <p>{{ informations.history.request }}</p>
      </div>
      <div>
        <p class="text-lg text-white">Code HTTP</p>
        <p>{{ informations.history.httpCode }}</p>
      </div>
      <div>
        <p class="text-lg text-white">Time</p>
        <p>{{ informations.history.time }}</p>
      </div>
      <div>
        <p class="text-lg text-white">Method</p>
        <p>{{ informations.history.method }}</p>
      </div>
    </div>

    <div class="overflow-scroll w-4/5 h-2/5">
      <HeaderTab
        :tabs="tabs"
        :sizeable="false"
        @setCurrentIndex="updateCurrentTab"
      />

      <div
        v-for="(tab, index) in tabs"
        :key="index"
        v-show="isSelected(index)"
        class="relative"
      >
        <Title :title="tab.type" :description="tab.descritpion" />
        <KeyValue
          v-for="(data, index) in keyValueType(tab.type)"
          :key="index"
          :index="index"
          :option="data"
          :deleted="false"
          type="Headers"
          disabled="disabled"
        />
      </div>
    </div>

    <div class="w-4/5 h-2/5 pb-10">
      <div class="flex justify-between w-1/4 items-center">
        <h1
          class="mb-3 text-xl tracking-tight font-extrabold sm:text-xl md:text-4xl"
        >
          Data
        </h1>
        <Copy :requestData="informations.history.data" />
        <Export :requestData="informations.history.data" />
      </div>

      <div
        class="dark:border-gray-600 dark:placeholder-gray-400 dark:text-white bg-gray-50 dark:bg-gray-800 block rounded-sm overflow-x-scroll"
      >
        <pre class="">{{ informations.history.data }}</pre>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import ButtonBack from "@/components/Buttons/Back.vue";
import Copy from "@/components/Buttons/Copy.vue";
import Export from "@/components/Buttons/Export.vue";
import KeyValue from "@/components/parameters/KeyValue.vue";
import HeaderTab from "@/components/HeaderTab.vue";
import Title from "@/components/parameters/Title.vue";
import Tabs from "@/constants/Tabs";
import type { TypeTabs } from "@/store/modules/param/types";
import type { Informations } from "@/store/modules/history/types";
export default defineComponent({
  name: "info-history",
  components: {
    ButtonBack,
    Copy,
    Export,
    HeaderTab,
    KeyValue,
    Title,
  },
  props: {
    id: Number,
  },
  data() {
    return {
      informations: this.$store.getters.getInformationsById(
        this.id
      ) as Informations,
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
    keyValueType(type: TypeTabs) {
      if (type == "Headers") return this.informations.parameters.headers;
      if (type == "Authorization")
        return this.informations.parameters.authorization;
      if (type == "Query") return this.informations.parameters.queries;
    },
  },
});
</script>
<style lang="scss" scoped>
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transition: all 0.5s ease;
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>
