import axios from "axios"
import { Base_URL, METHOD_TYPE } from "./constant"

const getHeader = (headerData) => { 
    const token = localStorage.getItem("user");
    return {
        "Content-Type": headerData ?"multipart/form-data" :"application/json",
        "x-access-token": token ? token : ""
    }
   
};
export const fetchAndProcesd = (url, method, data, callback, headerData) => {
    const options = {
        baseURL: Base_URL,
        url: url,
        method: method,
        params: method === METHOD_TYPE.GET ? data : null,
        data: method !== METHOD_TYPE.GET ? data : null,
        header : getHeader(headerData)
    }
    axios(options)
        .then((res) => callback(false, res.data))
        .catch(err => { 
            console.log(err.response);
        })
}