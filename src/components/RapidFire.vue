<template>
  <StartScreen v-if="!quizStarted" @quizStarted="startHandler" />
  <component
    v-if="quizStarted && !quizCompleted"
    :quizData="quizData[step]"
    :key="step"
    :is="quizData[step].type"
    @submit="submitHandler"
  />
  <EndScreen v-if="quizCompleted" :results="resultsStore" />
</template>

<script>
import { reactive, ref } from "vue";
import StartScreen from "./StartScreen.vue";
import EndScreen from "./EndScreen.vue";
import StandardQuestion from "./StandardQuestion.vue";
export default {
  props: ["quizData"],
  setup(props) {
    const state = reactive({
      quizData: props.quizData,
      questionsCount: props.quizData.length,
    });
    let resultsStore = [];
    const step = ref(0);
    const quizStarted = ref(false);
    const quizCompleted = ref(false);
    //methods
    const startHandler = () => {
      quizStarted.value = true;
    };
    const incrementStep = () => {
      step.value++;
    };
    const submitHandler = (answer) => {
      resultsStore.push(answer);
      incrementStep();
      if (step.value === state.questionsCount) {
        quizCompleted.value = true;
      }
    };
    return {
      props,
      state,
      resultsStore,
      incrementStep,
      startHandler,
      step,
      quizStarted,
      quizCompleted,
      submitHandler,
    };
  },
  components: {
    StartScreen,
    StandardQuestion,
    EndScreen,
  },
};
</script>

<style lang="scss" scoped></style>
