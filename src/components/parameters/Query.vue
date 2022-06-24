<template>
  <div class="container-parameters">
    <div>
      <p @click="addQuery()">Plus</p>
    </div>
    <QueryRow
      v-for="(param, index) in getAll"
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
import { ParameterMutation } from "@/store/modules/param/types";
export default defineComponent({
  name: "query-component",
  methods: {
    addQuery(): void {
      this.$store.commit(ParameterMutation.ADD);
    },
  },
  computed: {
    getAll(): any {
      this.$store.state;
      return this.$store.getters.params;
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
