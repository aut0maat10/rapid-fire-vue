<template>
  <StartScreen v-if="!quizStarted" @quizStarted="startHandler" />
  <component
    v-if="quizStarted"
    :key="quizData[step]"
    :is="quizData[step].type"
  />
</template>

<script>
import { reactive } from "vue";
import StartScreen from "./StartScreen.vue";
import StandardQuestion from "./StandardQuestion.vue";
export default {
  props: ["quizData"],
  setup(props) {
    const state = reactive({
      step: 0,
      quizStarted: false,
      quizData: props.quizData,
    });
    //methods
    const startHandler = () => {
      state.quizStarted = true;
    };
    const incrementStep = () => {
      state.step++;
    };
    return { props, state, incrementStep, startHandler };
  },
  components: {
    StartScreen,
    StandardQuestion,
  },
};
</script>

<style lang="scss" scoped></style>
