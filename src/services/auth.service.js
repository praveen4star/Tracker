import axios from "axios";
import { Base_URL } from "../utils/constant";
import API from "../utils/api";

export const loginInfo = (payload) => {
  // API.loginInfo(payload, (err, res) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log(res);
  //     localStorage.setItem("user", JSON.stringify(res?.authToken));
  //     return res.user;
  //   }
  // });
  return axios.post(Base_URL + "/users/login", payload)
  .then((response) => {
    localStorage.setItem("user", JSON.stringify(response?.data?.authToken));
    console.log(response);
    return response.data;
  });
 };






 


