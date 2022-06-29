<template>
  <div class="container-content-tabs">
    <Title :title="type" :description="description" />
    <KeyValue
      v-for="(data, index) in datas"
      :key="data.id"
      :index="index"
      :option="data"
      :deleted="true"
      :type="type"
    />
    <Button :type="type" />
  </div>
</template>
<script lang="ts">
import Title from "@/components/parameters/Title.vue";
import KeyValue from "@/components/parameters/KeyValue.vue";
import Button from "@/components/Buttons/Add.vue";
import type { Param } from "@/store/modules/param/types";

import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
  name: "tabs-content",
  props: {
    type: String,
    description: String,
  },
  computed: {
    datas(): Param[] {
      return this.$store.getters.getByType(this.type);
    },
  },
  components: { Title, KeyValue, Button },
});
</script>
<style lang="scss" scoped>
.container-content-tabs {
  overflow: scroll;
}
</style>
