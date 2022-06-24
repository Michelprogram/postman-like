<template>
  <div class="container-parameters">
    <div>
      <p @click="addQuery()">Plus</p>
    </div>
    <QueryRow
      v-for="(param, index) in all"
      :key="param.id"
      :index="index"
      :parameter="param.key"
      :value="param.value"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import QueryRow from "@/components/parameters/QueryRow.vue";
import { ParameterMutation, type Param } from "@/store/modules/param/types";
export default defineComponent({
  name: "query-component",
  methods: {
    addQuery(): void {
      this.$store.commit(ParameterMutation.ADD_PARAMETER);
    },
  },
  computed: {
    all(): Param[] {
      return this.$store.getters.getParamerers;
    },
  },
  components: {
    QueryRow,
  },
});
</script>
<style lang="scss">
@import "sierra-library/lib/index";

.container-parameters {
  display: flex;
  flex-direction: column;
  overflow: scroll;
}
</style>
