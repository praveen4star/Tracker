import { fetchAndProcesd } from "./apiAxios";
import { METHOD_TYPE } from "./constant";
import jwtInterceoptor from "./jwtinterceptor";

const loginInfo = (payload, callback) => {
  fetchAndProcesd("/users/login", METHOD_TYPE.POST, payload, callback);
}



const  getPlan=(callback)=>{
  fetchAndProcesd("/plan",METHOD_TYPE.GET,null,callback);
}

const API = { loginInfo,getPlan};
export default API;