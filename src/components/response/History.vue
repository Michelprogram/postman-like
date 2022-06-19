<template>
  <div class="container-history">
    <div class="options">
      <Trash @click="removeAll()" />
      <Export />
    </div>
    <table class="table">
      <thead>
        <tr class="text-small text-left">
          <th>Id</th>
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
          <td class="info-request">{{ history.id }}</td>

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
      const code: number = history.httpCode;
      if (code >= 100 && code <= 199) return "code-informations";
      if (code >= 200 && code <= 299) return "code-success";
      if (code >= 300 && code <= 399) return "code-redirection";
      if (code >= 400 && code <= 499) return "code-error-client";
      return "code-error-server";
    },
    removeAll(): void {
      this.$store.commit("history/delAll");
    },
  },
  computed: {
    histories(): Array<IHistory> {
      const res: Array<IHistory> = [];
      const start: Array<IHistory> = this.$store.getters["history/all"];
      for (let index = start.length - 1; index > 0; index--) {
        const element = start[index];
        res.push(element);
      }
      return res;
    },
  },
});
</script>
<style lang="scss" scoped>
@use "../../assets/variables" as color;
@import "sierra-library/lib/index";

$green: rgb(102, 199, 115);
$red: rgb(111, 61, 61);

.container-history {
  margin-top: 2%;
  overflow: scroll;

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

  .table {
    border-spacing: 0px 10px;
    border-collapse: separate;
    td,
    th {
      padding: 20px;
    }
    th {
      font-size: 1.1em;
    }

    td {
      margin-bottom: 3%;
    }
  }
  .history {
    background-color: white;
    border-radius: 3px;
    color: black;
    padding: 10px;
  }

  .info-request {
    margin: 0;
    cursor: pointer;
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
}
</style>
