<template>
  <TabsWrapperVue :tabs="tabs" class="container-response" />
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import TabsWrapperVue from "./TabsWrapper.vue";

import Data from "./response/Data.vue";
import HistoryVue from "./response/History.vue";

import type ITab from "@/interfaces/tab";

export default defineComponent({
  name: "response-component",
  components: {
    TabsWrapperVue,
  },
  data() {
    return {
      tabs: [
        { title: "Réponse", component: Data },
        { title: "History", component: HistoryVue },
      ],
    };
  },
});
</script>
<style lang="scss" scoped>
@import "sierra-library/lib/index";

.container-response {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
