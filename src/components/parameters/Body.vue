<template>
  <div>
    <Title title="Body" :description="description" />
    <div class="flex flex-col">
      <textarea
        class="bg-gray-50 dark:bg-gray-700 border-gray-300 text-gray-900 outline-none resize-none dark:border-gray-600 dark:placeholder-gray-400 dark:text-white rounded-sm"
        v-model="body"
        placeholder="Your body parameter"
        cols="30"
        rows="10"
      ></textarea>
      <div
        class="green flex items-center justify-center mt-3 h-10 w-1/3 rounded-lg cursor-pointer"
        @click="prettier()"
      >
        <p class="text-white">Prettier</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ParameterMutation } from "@/store/modules/param/types";
import { defineComponent } from "@vue/runtime-core";
import Title from "./Title.vue";
export default defineComponent({
  name: "body-component",
  data() {
    return {
      body: "",
      description:
        "Is data exchange with server, depends on content-type (JSON)",
    };
  },
  methods: {
    prettier() {
      const data = JSON.parse(this.body);
      this.body = JSON.stringify(data, undefined, 4);
    },
  },
  watch: {
    body(): void {
      this.$store.commit(ParameterMutation.UPDATE_BODY, this.body);
    },
  },
  components: { Title },
});
</script>
<style lang="scss" scoped>
@use "@/assets/variables/index.scss" as color;
.green {
  background-color: color.$green-light;
  border-color: color.$green-light;
}
</style>
