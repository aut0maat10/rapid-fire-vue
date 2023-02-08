<template>
  <div>Take this quiz to get started!</div>
  <button @click="startQuiz" class="rf-button">Start Quizzz</button>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "StartScreen",
  emits: ["quizStarted"],
  setup(props, { emit }) {
    const startQuiz = () => {
      emit("quizStarted");
    };

    return { props, emit, startQuiz };
  },
});
</script>

<style scoped></style>
