import { MockMethod } from "vite-plugin-mock";
import { LoginApi } from "@/services/user";

const login = {
  url: LoginApi,
  method: "post",
  // @ts-ignore
  response: ({ query }) => {
    console.log("mock:", query);
    return {
      //reason: { errorCode: 501, message: "错误描述" }, //	错误原因
      status: 1,
      result: 'userlogin',
    };
  },
};

//export default [login] as MockMethod[];

export default [
  {
    url: LoginApi,
    method: 'post',
    response: ({ query }) => {
      return {
        code: 0,
        data: {
          name: 'vben',
        },
      }
    },
  }] as MockMethod[]

// export default [
//   {
//     url: LoginApi,
//     method: "post",
//     response: ({ query }) => {
//       return {
//         code: 0,
//         data: {
//           name: "vben",
//         },
//       };
//     },
//   },
//   {
//     url: "/api/post",
//     method: "post",
//     timeout: 2000,
//     response: {
//       code: 0,
//       data: {
//         name: "vben",
//       },
//     },
//   },
//   {
//     url: "/api/text",
//     method: "post",
//     rawResponse: async (req, res) => {
//       let reqbody = "";
//       await new Promise((resolve) => {
//         req.on("data", (chunk) => {
//           reqbody += chunk;
//         });
//         req.on("end", () => resolve(undefined));
//       });
//       res.setHeader("Content-Type", "text/plain");
//       res.statusCode = 200;
//       res.end(`hello, ${reqbody}`);
//     },
//   },
// ] as MockMethod[];
