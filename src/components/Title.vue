<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "title-component",
});
</script>

<template>
  <div class="greetings">
    <h1 class="green">21 Api client</h1>
    <h3>Start your request right now.</h3>
  </div>
</template>

<style scoped lang="scss">
@import "sierra-library/lib/index";

.greetings {
  text-align: center;
  margin-bottom: 3%;

  h1 {
    font-weight: 500;
    font-size: 2.6rem;
    text-decoration: none;
    color: hsla(160, 100%, 37%, 1);
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
