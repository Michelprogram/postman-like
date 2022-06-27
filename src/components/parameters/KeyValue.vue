<template>
  <div class="flex flex-row items-center mb-4">
    <div class="basis-1/8">
      <input
        class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        type="checkbox"
        v-model="active"
      />
    </div>

    <div class="basis-2/4 mr-2">
      <input
        type="text"
        :class="
          isActive +
          'input-key-value border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
        "
        placeholder="Your parameter key"
        :disabled="!active"
        v-model="key"
      />
    </div>

    <div class="basis-2/4">
      <input
        type="text"
        :class="
          isActive +
          'input-key-value border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
        "
        placeholder="Your parameter value"
        :disabled="!active"
        v-model="value"
      />
    </div>
    <font-awesome-icon
      :icon="'fa-solid ' + 'fa-trash'"
      class="w-6 h-6 cursor-pointer"
      @click="deleteRow"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, type PropType } from "@vue/runtime-core";
import {
  ParameterMutation,
  type Param,
  type TypeTabs,
  type Options,
} from "@/store/modules/param/types";

export default defineComponent({
  props: {
    option: {
      type: Object as PropType<Param>,
      required: true,
    },
    type: {
      type: Object as PropType<TypeTabs>,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      active: this.option.active,
      key: this.option.key,
      value: this.option.value,
    };
  },
  methods: {
    deleteRow(): void {
      const option: Options = {
        index: this.index,
        type: this.type,
      };
      this.$store.commit(ParameterMutation.DELETE, option);
    },
  },
  computed: {
    isActive(): string {
      const active = "bg-gray-50 dark:bg-gray-700 ";
      const disable = "bg-gray-50 dark:bg-red-300 ";

      return this.active ? active : disable;
    },
  },
  watch: {
    active(): void {
      const option: Options = {
        index: this.index,
        type: this.type,
      };

      this.$store.commit(ParameterMutation.UPDATE_ACTIVE, option);
    },
    key(): void {
      const option: Options = {
        index: this.index,
        key: this.key,
        type: this.type,
      };

      this.$store.commit(ParameterMutation.UPDATE_KEY, option);
    },
    value() {
      const option: Options = {
        index: this.index,
        value: this.value,
        type: this.type,
      };

      this.$store.commit(ParameterMutation.UPDATE_VALUE, option);
    },
  },
});
</script>
<style lang="scss" scoped>
@use "@/assets/variables/index.scss" as color;

.form-check-input {
  &:checked {
    background-color: color.$green-light;
    border-color: color.$green-light;
  }
}

.input-key-value {
  outline: none;
  transition: all 0.5s ease-in;
  &focus {
    outline: none;
  }
}
</style>
