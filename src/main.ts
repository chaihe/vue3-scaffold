import { createApp } from "vue";
import App from "./App.vue";
import { setupPlugins } from "./plugins";
import router, { setupRouter } from "./router";
import mitt from "mitt";

async function init() {
  const app = createApp(App);
  setupRouter(app);
  setupPlugins(app);
  // app.use(router)
  window.CHAI = {
    CHAI: "chai",
    ZHI: "zhi",
  };
  window.YDMITTER = mitt();
  await router.isReady();
  app.mount("#app");
}

init();
