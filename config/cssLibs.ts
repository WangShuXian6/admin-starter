export interface LibItem {
  /**
   * library name
   */
  libName: string;
  /**
   * component style file path
   */
  style: (name: string) => string | string[] | boolean;
  /**
   * default `es`
   */
  libDirectory?: string;
  /**
   * whether convert component name from camel to dash
   */
  camel2DashComponentName?: boolean;
  /**
   * whether replace old import statement, only work in command === serve
   */
  replaceOldImport?: boolean;
}

interface ImpConfig {
  libList: LibItem[];
}

const libList = [
  {
    libName: "antd",
    style(name) {
      if (/popconfirm/.test(name)) {
        // support multiple style file path to import
        return [
          "antd/es/button/style/index.less",
          "antd/es/popover/style/index.less",
        ];
      }
      return `antd/es/${name}/style/index.less`;
    },
  },
];

const config:ImpConfig = { libList };
export default config;
