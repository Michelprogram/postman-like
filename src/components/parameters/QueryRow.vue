<template>
  <div class="container-query-row">
    <div>
      <label class="label" for="key">Parameter</label>
      <div class="input input-fullWidth">
        <input
          id="key"
          placeholder="Your parameter"
          type="text"
          @input="(e) => update(e)"
        />
      </div>
    </div>

    <div>
      <label class="label" for="value">Value</label>
      <div class="input input-fullWidth">
        <input id="value" placeholder="Value" type="text" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
  name: "query-row",
  props: {
    index: Number,
  },
  data() {
    return {
      parameter: "",
      value: "",
    };
  },
  methods: {
    update(e: any) {
      this.$store.commit("params/updateById", {
        index: this.index,
        param: { key: e.target.value, value: "oui" },
      });
    },
  },
});
</script>
<style lang="scss">
@import "sierra-library/lib/index";

.container-query-row {
  display: flex;
  justify-content: space-around;
}
</style>
