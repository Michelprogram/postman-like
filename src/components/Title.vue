<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "title-component",
});
</script>

<template>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <div class="greetings">
    <h1 class="green">21 Api client</h1>
    <h3>Start your request right now.</h3>
  </div>
</template>

<style scoped lang="scss">
@use "../assets/variables" as color;

.greetings {
  text-align: center;
  margin-bottom: 3%;

  h1 {
    font-weight: 500;
    font-size: 2.6rem;
    text-decoration: none;
    color: color.$green-light;
  }

  h3 {
    font-size: 1.2rem;
  }
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
