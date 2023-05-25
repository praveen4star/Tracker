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

const createTask=(payload,callback)=>{
  fetchAndProcesd("/task",METHOD_TYPE.POST,payload,callback);
}

const getTask=(payload,callback)=>{
  fetchAndProcesd("/task",METHOD_TYPE.GET,payload,callback);
}

const getConsistency=(callback)=>{
  fetchAndProcesd("/task/heatmap",METHOD_TYPE.GET,null,callback);
}

const getTaskBYToday=(callback)=>{
  fetchAndProcesd("/task/today",METHOD_TYPE.GET,null,callback);
}

const API = { loginInfo,getPlan,createPlan,createTask,getTask,getConsistency,getTaskBYToday};
export default API;