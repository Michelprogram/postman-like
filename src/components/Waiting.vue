<template>
  <div class="container-spinner">
    <div class="loadingSpinner">
      <span class="loadingSpinner-inner"></span>
      <span class="loadingSpinner-inner"></span>
      <span class="loadingSpinner-inner"></span>
      <span class="loadingSpinner-inner"></span>
    </div>
    <div class="info">
      <p class="timer">{{ setTimer }} s</p>
      <button
        class="button button--small button--secondary cancel-button"
        @click="cancel()"
      >
        Cancel
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import { StatsMutation } from "@/store/modules/stats/types";
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
  data() {
    return { timer: 0, startTime: Date.now() };
  },
  methods: {
    cancel() {
      this.timer = 0;
      this.$emit("cancel");
    },
  },
  mounted() {
    setInterval(() => (this.timer = Date.now() - this.startTime), 100);
  },
  computed: {
    setTimer(): string {
      return (this.timer / 1000).toFixed(2);
    },
  },
  beforeUnmount() {
    this.$store.commit(StatsMutation.TIMER, this.setTimer);
  },
  name: "waiting-component",
});
</script>
<style lang="scss">
@import "sierra-library/lib/index";

.container-spinner {
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  animation: blurPop forwards 0.5s;

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    left: 50%;
    margin-left: -60px;
    margin-top: -60px;
    position: fixed;
    top: 65%;
    width: 120px;
    .timer {
      color: white;
      font-size: 1.5em;
      text-align: center;
    }
    .cancel-button {
      margin: 0;
    }
  }
}

@keyframes blurPop {
  0% {
    backdrop-filter: blur(0px);
  }
  100% {
    backdrop-filter: blur(8px);
  }
}
</style>
