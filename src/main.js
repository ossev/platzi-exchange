import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
// el símbolo @ hacer referencia a la dirección del archivo
import router from "@/router";
import Chartkick from "vue-chartkick";
import Chart from "chart.js";

createApp(App)
  .use(router)
  .use(Chartkick.use(Chart))
  .mount("#app");
