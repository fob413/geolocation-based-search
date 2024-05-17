import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig, loadEnv } from "vite";

const envKeys = [
  'REACT_APP_BEND_URL'
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const processEnv = {};
  envKeys.forEach(key => processEnv[key] = env[key]);

  return {
    define: {
      'process.env': processEnv
    },
    plugins: [react()],
    resolve: {
      alias: [{find: "@", replacement: path.resolve(__dirname, "src")}]
    },
  }
});
