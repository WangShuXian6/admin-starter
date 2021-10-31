const server = {
  proxy: {
    "/api": {
      target: "http://127.0.0.1:7770",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ""),
    },
  },
};

export default server;
