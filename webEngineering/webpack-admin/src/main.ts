import { str } from "@/add";
import { createApp } from "vue";
import App from "@/App.vue";
import router from "./routes";
import { createPinia } from "pinia";
import './style.css'
console.log("hello webpack");
console.log(str());

createApp(App).use(router).use(createPinia()).mount("#app");
