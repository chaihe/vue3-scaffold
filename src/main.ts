import { createApp } from 'vue'
import App from './App.vue'
import { setupPlugins } from './plugins'
import router, { setupRouter } from './router'


async function init() {
  const app = createApp(App)
  setupRouter(app)
  setupPlugins(app)
  // app.use(router)
  await router.isReady()
  app.mount('#app')
}

init()
