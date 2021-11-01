import request from "@/shared/utils/request";
import { LoginParams } from "@/shared/models/user";

export const LoginApi = `/ucenter/login`;

export const login = async (data: LoginParams) => {
  //return fetch(LoginApi,{ method: "POST", body:JSON.stringify(data) })
  return request(LoginApi, { method: "post", data });
};

export default { login };
