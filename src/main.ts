import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from 'pinia';

import Blank from "./layouts/Blank.vue";
import Default from "./layouts/Default.vue";
import { setIcons } from "./components/icons";

const pinia = createPinia()
const app = createApp(App);

app.use(pinia)
app.use(router);
app.component("default-layout", Default);
app.component("blank-layout", Blank);
setIcons(app);
app.mount("#app");
