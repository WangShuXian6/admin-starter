import fs from "fs";
// import { ViteAliases } from 'vite-aliases'
// @ts-ignore
import lessToJS from "less-vars-to-js";
import { resolve } from "path";
import { defineConfig } from "vite";
import generateVitePlugins from "./config/plugins";

import server from './config/server'

const pathResolver = (path: string) => resolve(__dirname, path);
const themeVariables = lessToJS(
  fs.readFileSync(pathResolver("./config/variables.less"), "utf8")
);

function pathResolve(dir: string) {
  return resolve(__dirname, ".", dir);
}

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  console.log('command:',command)
  return {
    base:'',
    plugins: generateVitePlugins({ command }),
    envDir: "environments",
    resolve: {
      alias: [
        {
          // /@/xxxx  =>  src/xxx
          find: /^~/,
          replacement: pathResolve("node_modules") + "/",
        },
        {
          // /@/xxxx  =>  src/xxx
          find: /@\//,
          replacement: pathResolve("src") + "/",
        },
      ],
    },
    optimizeDeps: {
      include: ["@ant-design/colors", "@ant-design/icons"],
    },
    server,
    css: {
      modules: {
        localsConvention: "camelCaseOnly",
      },
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          modifyVars: themeVariables,
        },
      },
    },
  };
});
