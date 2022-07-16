import vue from "@vitejs/plugin-vue";
import { Plugin } from "vite";
import { setupMockPlugin } from "./mock";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

export default function setupVitePlugins(isBuild: boolean, env: ViteEnv) {
  const plugins: Plugin[] = [vue()];
  plugins.push(setupMockPlugin(isBuild));
  plugins.push(
    AutoImport({
      resolvers: [ElementPlusResolver()],
    })
  );
  plugins.push(
    Components({
      resolvers: [ElementPlusResolver()],
    })
  );

  return plugins;
}
