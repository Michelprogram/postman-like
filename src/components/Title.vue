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

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
