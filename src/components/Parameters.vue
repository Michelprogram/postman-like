<template>
  <div>
    <TabsWrapperVue :tabs="tabs" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import TabsWrapperVue from "./TabsWrapper.vue";
import Header from "./Headers.vue";
import Authorizathion from "./Authorizations.vue";
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
      ],
    };
  },
});
</script>
<style lang="scss">
@import "sierra-library/lib/index";
</style>
