<template>
  <TabsWrapperVue :tabs="tabs" class="container-tabs-parameter" />
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import TabsWrapperVue from "@/components/TabsWrapper.vue";
import Header from "@/components/parameters/Headers.vue";
import Authorizathion from "@/components/parameters/Authorizations.vue";
import Body from "@/components/parameters/Body.vue";
import Queries from "@/components/parameters/Queries.vue";
import type { ITab } from "@/interfaces/tab";
export default defineComponent({
  name: "parameters-component",
  components: {
    TabsWrapperVue,
  },
  data() {
    return {
      tabs: [
        { title: "Headers", component: Header, icons: "fa-book-open" },
        {
          title: "Authorization",
          component: Authorizathion,
          icons: "fa-address-card",
        },
        { title: "Query", component: Queries, icons: "fa-gear" },
        { title: "Body", component: Body, icons: "fa-sitemap" },
      ] as ITab[],
    };
  },
});
</script>
<style lang="scss" scoped>
.container-tabs-parameter {
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 100%;
  min-height: 100px;
}
</style>
