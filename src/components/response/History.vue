<template>
  <div class="flex flex-col justify-around">
    <div class="w-full flex justify-around">
      <font-awesome-icon icon="fa-solid fa-trash" @click="remove()" />
      <font-awesome-icon icon="fa-solid fa-file-export" />
    </div>
    <div class="flex justify-around border-2">
      <div>
        <p class="mb-3">URL</p>
        <p
          :class="borderColor"
          v-for="(history, index) in histories"
          :key="index"
        >
          {{ history.request }}
        </p>
      </div>
      <div>
        <p class="mb-3">Code</p>
        <p
          :class="borderColor"
          v-for="(history, index) in histories"
          :key="index"
        >
          {{ history.httpCode }}
        </p>
      </div>
      <div class="text-center">
        <p class="mb-3">Time</p>
        <p
          :class="borderColor"
          v-for="(history, index) in histories"
          :key="index"
        >
          {{ history.time }}
        </p>
      </div>
      <div class="text-center">
        <p class="mb-3">Info</p>
        <div class="mb-3" v-for="(history, index) in histories" :key="index">
          <ButtonBack
            :redirect="{ name: 'HistoryDetail', params: { id: history.id } }"
            orientation="Right"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import type IHistory from "@/interfaces/history";
import { defineComponent } from "@vue/runtime-core";
import { HistoryMutation } from "@/store/modules/history/types";
import ButtonBack from "@/components/response/ButtonBack.vue";

export default defineComponent({
  name: "history-component",
  components: {
    ButtonBack,
  },
  methods: {
    httpCode(history: IHistory): string {
      const code: number = history.httpCode;
      if (code >= 100 && code <= 199) return "code-informations";
      if (code >= 200 && code <= 299) return "code-success";
      if (code >= 300 && code <= 399) return "code-redirection";
      if (code >= 400 && code <= 499) return "code-error-client";
      return "code-error-server";
    },
    remove(): void {
      this.$store.commit(HistoryMutation.DELETE_HISTORY);
    },
  },
  computed: {
    histories(): Array<IHistory> {
      return this.$store.getters.getHistories;
    },
    borderColor(): string {
      return "mb-3 border-b-2 border-green-400";
    },
  },
});
</script>
<style lang="scss" scoped>
@use "../../assets/variables" as color;

.green {
  background-color: color.$green-light;
}
.code {
  &-informations {
    background-color: color.$error-100;
  }
  &-success {
    background-color: color.$error-200;
  }
  &-redirection {
    background-color: color.$error-300;
  }
  &-error {
    &-client {
      background-color: color.$error-400;
    }
    &-server {
      background-color: color.$error-500;
    }
  }
}
</style>
