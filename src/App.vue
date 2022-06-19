<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import Title from "@/components/Title.vue";
import Uri from "@/components/Uri.vue";
import Methods from "@/components/Methods.vue";
import Parameters from "@/components/Parameters.vue";
import ResponseVue from "./components/Response.vue";

export default defineComponent({
  name: "app",
  components: {
    Title,
    Uri,
    Methods,
    Parameters,
    ResponseVue,
  },
});
</script>

<template>
  <main class="container-app">
    <div class="left-part">
      <Title />
      <Methods />
      <Uri />
      <Parameters />
    </div>
    <div class="right-part">
      <ResponseVue />
    </div>
  </main>
</template>

<style lang="scss">
@use "./assets/variables" as color;

@import "./assets/base.css";

.container-app {
  display: grid;
  width: 80%;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 50px;
  grid-row-gap: 50px;

  margin-left: 10%;
  height: 100vh;

  .left-part,
  .right-part {
    height: 95%;
    max-height: 95%;
    min-height: 95%;
    max-width: 100%;
    min-width: 100%;

    //border: 2px solid red;
    display: flex;
    flex-direction: column;
    margin-top: 5%;
  }
}

@media (hover: hover) {
  a:hover {
    background-color: color.$dark-blue;
  }
}

@media (min-width: 1024px) {
  body {
  }

  #app {
  }
}
</style>
