<template>
  <div class="container-parameters">
    <div>
      <p @click="addQuery()">Plus</p>
      <p>Moins</p>
    </div>
    <QueryRow v-for="index in params" :key="index" :index="index" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import QueryRow from "@/components/parameters/QueryRow.vue";
export default defineComponent({
  name: "query-component",
  data() {
    return {
      params: 1,
    };
  },
  methods: {
    addQuery(): void {
      this.$store.commit("params/addQuery");
      this.params++;
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
