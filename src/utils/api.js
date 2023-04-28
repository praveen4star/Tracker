import { fetchAndProcesd } from "./apiAxios";
import { METHOD_TYPE } from "./constant";

const loginInfo = (payload, callback) => {
  fetchAndProcesd("/users/login", METHOD_TYPE.POST, payload, callback);
}
const API = { loginInfo };
export default API;