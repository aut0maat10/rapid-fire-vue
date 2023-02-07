// import { createApp } from 'vue'
// import App from './App.vue'

// import './assets/main.css'

// createApp(App).mount('#app')

import RapidFire from "./components/RapidFire.vue";

export default {
  install: (app) => {
    app.component("RapidFire", RapidFire);
  },
};
