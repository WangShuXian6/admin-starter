import react from "@vitejs/plugin-react";
import { vitePluginFaker } from "vite-plugin-faker";
import { viteMockServe } from "vite-plugin-mock";
import vitePluginImp from "vite-plugin-imp";
import LibConfig from "./cssLibs";
import svgr from "vite-plugin-svgr";

const generateVitePlugins = ({ command }) => [
  react(),
  svgr(),
  viteMockServe({
    mockPath: "mock",
    supportTs: true,
    watchFiles: true,
    localEnabled: command === "serve",
    logger: true,
  }),
  // styleImport({
  //   libs: [
  //     {
  //       libraryName: "antd",
  //       esModule: true,
  //       resolveStyle: (name) => {
  //         return `antd/es/${name}/style/index`;
  //       },
  //     },
  //   ],
  // }),
  vitePluginImp(LibConfig),
  //ViteAliases(),
  vitePluginFaker({
    basePath: "/src/apis",
    includes: [/^.*Service/],
    watchFile: true,
  }),
];

export default generateVitePlugins;
