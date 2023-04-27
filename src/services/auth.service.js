import axios from "axios";
import {Base_URL}  from "../utils/constant";

export const loginInfo =  (payload) => {
  return axios.post(Base_URL + "/users/login", payload)
  .then((response) => {
    localStorage.setItem("user", JSON.stringify(response?.data?.authToken));
    console.log(response);
    return response.data;
  });
 };






 


