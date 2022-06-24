<template>
  <div class="container-query-row">
    <div>
      <label class="label" for="key">Parameter</label>
      <div class="input input-fullWidth">
        <input
          id="key"
          placeholder="Your parameter"
          type="text"
          @input="(e) => updateKey(e)"
        />
      </div>
    </div>

    <div>
      <label class="label" for="value">Value</label>
      <div class="input input-fullWidth">
        <input
          id="value"
          placeholder="Value"
          type="text"
          @input="(e) => updateValue(e)"
        />
      </div>
    </div>
    <Trash class="trash" @click="deleteParams()" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Trash from "@/components/icons/Trash.vue";
import { ParameterMutation } from "@/store/modules/param/types";
export default defineComponent({
  name: "query-row",
  props: {
    index: Number,
    parameter: String,
    value: String,
  },
  methods: {
    updateValue(e: any) {
      this.$store.commit(ParameterMutation.UPDATE_VALUE_PARAMETER, {
        index: this.index,
        value: e.target.value,
      });
    },
    updateKey(e: any) {
      this.$store.commit(ParameterMutation.UPDATE_KEY_PARAMETER, {
        index: this.index,
        key: e.target.value,
      });
    },
    deleteParams(): void {
      this.$store.commit(ParameterMutation.DELETE_PARAMETER, this.index);
    },
  },
  components: { Trash },
});
</script>
<style lang="scss">
@import "sierra-library/lib/index";

.container-query-row {
  display: flex;
  justify-content: space-around;

  .trash {
    width: 20px;
  }
}
</style>
