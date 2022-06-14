<template>
  <div>
    <div class="formCollapsed">
      <div class="input formCollapsed-item formCollapsed-itemPrimary">
        <input v-model="uri" id="test7" placeholder="url" type="text" />
      </div>

      <button class="formCollapsed-item button button-primary">Send</button>
    </div>
    <p>Methods : {{ methods }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "URI",
  props: {
    methods: String,
  },
  data() {
    return {
      uri: "",
    };
  },
  methods: {
    sendRequest() {
      var myInit = {
        method: this.methods,
        mode: "cors",
        cache: "default",
      };
      console.log(myInit);
    },
  },
});
</script>
<style lang="scss">
@import "sierra-library/lib/index";
</style>
