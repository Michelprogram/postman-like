<template>
  <div>
    <TabsWrapperVue :tabs="tabs" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import TabsWrapperVue from "@/components/TabsWrapper.vue";
import Header from "@/components/parameters/Headers.vue";
import Authorizathion from "@/components/parameters/Authorizations.vue";
import type ITab from "@/interfaces/tab";
export default defineComponent({
  name: "parameters-component",
  components: {
    TabsWrapperVue,
  },
  data() {
    return {
      tabs: [
        { title: "Headers", component: Header },
        { title: "Authorization", component: Authorizathion },
      ] as ITab[],
    };
  },
});
</script>
<style lang="scss">
@import "sierra-library/lib/index";
</style>
