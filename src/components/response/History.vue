<template>
  <div class="flex flex-col mt-5">
    <div class="flex justify-around">
      <div>
        <p class="mb-3">URL</p>
        <p
          v-for="(info, index) in informations"
          :class="borderColor(info.history)"
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
import borderColor from "@/mixins/borderColor";

export default defineComponent({
  name: "history-component",
  components: {
    ButtonBack,
  },
  methods: {
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
  },
  mixins: [borderColor],
});
</script>
