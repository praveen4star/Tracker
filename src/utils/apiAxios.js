import { Base_URL, METHOD_TYPE } from "./constant";
import jwtInterceoptor from "./jwtinterceptor";

export const fetchAndProcesd = (url, method, data, callback, headerData) => {
    const options = {
        baseURL: Base_URL,
        url: url,
        method: method,
        params: method === METHOD_TYPE.GET ? data : null,
        data: method !== METHOD_TYPE.GET ? data : null
      }
    jwtInterceoptor(options)
        .then((res) => callback(false,res.data))
        .catch(err => { 
            console.log(err);
        })
}