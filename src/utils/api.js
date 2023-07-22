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

const getTask=(methodtype,payload,callback)=>{
 const url=methodtype?methodtype:METHOD_TYPE.GET;
  fetchAndProcesd("/task",url,payload,callback);
}

const getConsistency=(callback)=>{
  fetchAndProcesd("/task/heatmap",METHOD_TYPE.GET,null,callback);
}

const getTaskBYToday=(callback)=>{
  fetchAndProcesd("/task/today",METHOD_TYPE.GET,null,callback);
}

const getDailyTask=(callback)=>{
  fetchAndProcesd("/task/daily",METHOD_TYPE.GET,null,callback);
}

  const getUpcomingTask=(callback)=>{
    fetchAndProcesd("/task/upcoming",METHOD_TYPE.GET,null,callback);
  }

const API = { loginInfo,getPlan,createPlan,createTask,getTask,getConsistency,getTaskBYToday,getDailyTask,getUpcomingTask};
export default API;