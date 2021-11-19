//First file that gets loaded in Vue.JS

import { createApp } from 'vue' //Loads vue Library
import App from './App.vue'//loads vue component

createApp(App).mount('#app') //renders everything into an element with an ID of app.
