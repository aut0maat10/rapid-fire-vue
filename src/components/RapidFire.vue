<template>
  <StartScreen v-if="!quizStarted" @quizStarted="startHandler" />
  <component
    v-if="quizStarted"
    :quizData="quizData[step]"
    :key="step"
    :is="quizData[step].type"
    @submit="submitHandler"
  />
</template>

<script>
import { reactive, ref } from "vue";
import StartScreen from "./StartScreen.vue";
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
  },
};
</script>

<style lang="scss" scoped></style>
