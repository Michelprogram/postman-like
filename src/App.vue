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
  <main>
    <Title />
    <Methods @methods="updateMethods" :methods="methods" />
    <Parameters />
    <Uri :methods="methods" @response="updateResponse" />
    <ResponseVue :response="response" />
  </main>
</template>

<style>
@import "./assets/base.css";

#app {
  font-weight: normal;
}

header {
  line-height: 1.5;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
