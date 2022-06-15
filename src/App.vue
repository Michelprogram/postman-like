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
    /*     Parameters,
     */ ResponseVue,
  },
  data() {
    return {
      uri: "",
      methods: "GET",
      response: {},
    };
  },
  methods: {
    updateMethods(variable: string): void {
      this.methods = variable;
    },
    updateResponse(variable: Record<string, any>): void {
      this.response = variable;
    },
  },
});
</script>

<template>
  <main class="container-app">
    <div class="left-part">
      <Title />
      <Methods @methods="updateMethods" :methods="methods" />
      <!--     <Parameters />
 -->
      <Uri :methods="methods" @response="updateResponse" />
    </div>
    <div class="right-part">
      <ResponseVue :response="response" />
    </div>
  </main>
</template>

<style lang="scss">
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
    width: 80%;
  }

  .left-part {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .right-part {
    display: flex;
    height: 100%;
    justify-content: center;
    flex-direction: column;
  }
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
  }

  #app {
  }
}
</style>
