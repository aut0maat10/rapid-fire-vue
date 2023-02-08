<template>
  <h2>Good Job</h2>
  <div>
    <p>{{ quizResults }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: ["results"],
  setup(props) {
    const quizResults = ref(props.results);
    return { quizResults };
  },
});
</script>

<style scoped></style>
