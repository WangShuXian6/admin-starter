import umiRequest from "umi-request";
import { message as antdMessage } from "antd";
console.log('baseurl:', import.meta.env.VITE_BASE_URL);
enum Status {
  success = 1, // 请求正常
  error = 0, // 请求异常
}

type ErrorReason = {
  errorCode: number; //异常状态码 由各项目组自由定义
  message: string; // 异常原因
};

type ListResponse = {
  list: any[];
  total: number;
};

type ListReauest = {
  page: number;
  pageSize: number;
};

interface RequestParams {}

interface ResponseParams {
  reason?: ErrorReason; //	错误原因
  requestId?: string; // 请求id
  status: Status; // 响应成功与否
  result?: any | ListResponse; // 响应结果
}

const exampleReauest = {
  page: 1,
  pageSize: 10,
  other: "demo",
};

const exampleResponse = {
  reason: { errorCode: 501, message: "错误描述" }, //	错误原因
  requestId: "demoid", // 请求id
  status: 0,
  result: ["demo"],
};

const codeMaps = {
  200: "服务器成功返回请求的数据。",
  201: "新建或修改数据成功。",
  202: "一个请求已经进入后台排队（异步任务）。",
  204: "删除数据成功。",
  400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
  401: "用户没有权限（令牌、用户名、密码错误）。",
  403: "用户得到授权，但是访问是被禁止的。",
  404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
  406: "请求的格式不可得。",
  410: "请求的资源被永久删除，且不会再得到的。",
  422: "当创建一个对象时，发生一个验证错误。",
  500: "服务器发生错误，请检查服务器。",
  502: "网关错误。",
  503: "服务不可用，服务器暂时过载或维护。",
  504: "网关超时。",
};

// request拦截器, 改变url 或 options.
umiRequest.interceptors.request.use((url, options) => {
  console.log('import.meta.env.VITE_BASE_URL:',import.meta.env.VITE_BASE_URL)
  return {
    url,
    options: {
      ...options,
      interceptors: true,
      prefix: import.meta.env.VITE_BASE_URL,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    },
  };
});

// 提前对响应做异常处理
umiRequest.interceptors.response.use(async (response: Response) => {
  const data = await response.clone().json();
  const { reason = {}, requestId, result, status } = data;
  const { errorCode: code, message } = reason;
  if (status === Status.error) {
    message.error(codeMaps[status]);
    throw new Error(message);
  }

  return response;
});

const request = async (url: string, options: Object) => {
  umiRequest<ResponseParams>(url, options)
    .then(function (response) {
      const { reason, requestId, result, status } = response;
      const { errorCode: code, message } = reason || {};
      if (status === Status.error) {
        code && antdMessage.error(codeMaps[code]);
        return { success: false, data: null };
      }
      if (result?.list && result?.total) {
        return { success: true, data: result.list, total: result.total };
      }
      return { success: true, data: result };
    })
    .catch(function (error) {
      antdMessage.error(error);
      return { success: false, data: null };
    });
};

export default request;
