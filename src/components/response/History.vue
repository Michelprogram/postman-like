<template>
  <div class="container-history">
    <div class="options">
      <Trash @click="removeAll()" />
      <Export />
    </div>
    <table class="table">
      <thead>
        <tr class="text-small text-left">
          <th>URL</th>
          <th>Method</th>
          <th>Code</th>
          <th>time</th>
          <th>data</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(history, index) in histories"
          :key="index"
          :class="httpCode(history) + ' history'"
        >
          <td class="info-request">{{ history.request }}</td>
          <td class="info-request">{{ history.method }}</td>
          <td class="info-request">{{ history.httpCode }}</td>
          <td class="info-request">{{ history.time }}s</td>
          <td class="info-request">{{ history.data }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
import type IHistory from "@/interfaces/history";
import { defineComponent } from "@vue/runtime-core";
import Trash from "@/components/icons/Trash.vue";
import Export from "@/components/icons/Export.vue";

export default defineComponent({
  name: "history-component",
  components: {
    Trash,
    Export,
  },
  methods: {
    httpCode(history: IHistory): string {
      return history.httpCode != 200 ? "warning" : "sucess";
    },
    removeAll(): void {
      this.$store.commit("history/delAll");
    },
  },
  computed: {
    histories(): Array<IHistory> {
      return this.$store.getters["history/all"] as Array<IHistory>;
    },
  },
});
</script>
<style lang="scss" scoped>
@import "sierra-library/lib/index";

$green: rgb(102, 199, 115);
$red: rgb(111, 61, 61);

.container-history {
  margin-top: 2%;

  .options {
    width: 30%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 35%;
    margin-bottom: 2%;
    svg {
      width: 25px;
    }
  }
  .history {
    background-color: white;
    border-radius: 3px;
    color: black;
  }

  .info-request {
    margin: 0;
    cursor: pointer;
  }

  .success {
    background-color: $green;
  }

  .warning {
    background-color: $red;
  }
}
</style>
