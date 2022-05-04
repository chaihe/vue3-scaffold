import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import alias from './vite/alias'
import { parseEnv } from './vite/util'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias,
//   }
// })

export default ({ command, mode }: ConfigEnv) => {
  const isBuild = command === 'build'
  const root = process.cwd()
  const env = loadEnv(mode, root)
  console.log(parseEnv(env));
  return {
    plugins: [vue()],
    resolve: {
      alias,
    }
  }

}
