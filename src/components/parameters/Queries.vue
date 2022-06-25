<template>
  <div class="container-parameters">
    <div class="icons-plus">
      <Plus @click="addQuery()" />
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
import Plus from "@/components/icons/Plus.vue";

export default defineComponent({
  name: "query-component",
  methods: {
    addQuery(): void {
      this.$store.commit(ParameterMutation.ADD_PARAMETER);
    },
  },
  computed: {
    all(): Param[] {
      return this.$store.getters.getParameters;
    },
  },
  components: {
    QueryRow,
    Plus,
  },
});
</script>
<style lang="scss">
.container-parameters {
  display: flex;
  flex-direction: column;
  overflow: scroll;
}

.icons-plus {
  width: 30px;
}
</style>
