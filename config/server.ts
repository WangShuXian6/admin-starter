const server = {
  proxy: {
    "/ucenter": {
      target: "http://172.16.131.27:8443",
      changeOrigin: true,
      //rewrite: (path:string) => path.replace(/^/, ""),
      // rewrite: (path) => path.replace(/^\/api/, ""),
    },
  },
};

export default server;
