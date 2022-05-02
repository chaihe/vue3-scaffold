import { createApp, initCustomFormatter } from 'vue'
import App from './App.vue'
import router, { setupRouter } from './router'



async function init() {
  const app = createApp(App)
  setupRouter(app)
  // app.use(router)
  await router.isReady()
  app.mount('#app')
}

init()
