import { fetchAndProcesd } from "./apiAxios";
import { METHOD_TYPE } from "./constant";

const loginInfo = (payload, callback) => {
  fetchAndProcesd("/users/login", METHOD_TYPE.POST, payload, callback);
}

const  getPlan=(callback)=>{
  fetchAndProcesd("/plan",METHOD_TYPE.GET,null,callback);
}

const createPlan=(payload,callback)=>{
  fetchAndProcesd("/plan",METHOD_TYPE.POST,payload,callback);
}

const API = { loginInfo,getPlan,createPlan};
export default API;