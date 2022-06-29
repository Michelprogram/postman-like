<template>
  <div class="flex flex-col mt-5">
    <div class="flex justify-around">
      <div>
        <p class="mb-3">URL</p>
        <p
          :class="borderColor"
          v-for="(info, index) in informations"
          :key="index"
        >
          {{ info.history.request }}
        </p>
      </div>
      <div>
        <p class="mb-3">Code</p>
        <p class="mb-3" v-for="(info, index) in informations" :key="index">
          {{ info.history.httpCode }}
        </p>
      </div>
      <div class="text-center">
        <p class="mb-3">Time</p>
        <p class="mb-3" v-for="(info, index) in informations" :key="index">
          {{ info.history.time }}
        </p>
      </div>
      <div class="text-center">
        <p class="mb-3">Info</p>
        <div class="mb-3" v-for="(info, index) in informations" :key="index">
          <ButtonBack
            :redirect="{ name: 'HistoryDetail', params: { id: info.id } }"
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
import {
  HistoryMutation,
  type Informations,
} from "@/store/modules/history/types";
import ButtonBack from "@/components/Buttons/Back.vue";

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
    histories(): IHistory[] {
      return this.$store.getters.getHistories;
    },
    informations(): Informations[] {
      return this.$store.getters.getInformations;
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
