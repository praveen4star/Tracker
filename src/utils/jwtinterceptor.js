import axios from "axios";

const jwtInterceoptor = axios.create({});

jwtInterceoptor.interceptors.request.use((config) => {
  let tokensData = JSON.parse(localStorage.getItem("user"));
  config.headers.set("x-access-token",tokensData);
  return config;
});

// jwtInterceoptor.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     if (error.response.status === 401) {
//       const authData = JSON.parse(localStorage.getItem("user"));
//       const payload = {
//         access_token: authData.access_token,
//         refresh_token: authData.refreshToken,
//       };

//       let apiResponse = await axios.post(
//         "http://localhost:9000/api/users/login",
//         payload
//       );
//       localStorage.setItem("tokens", JSON.stringify(apiResponse.data));
//       error.config.headers[
//         "Authorization"
//       ] = `bearer ${apiResponse.data.access_token}`;
//       return axios(error.config);
//     } else {
//       return Promise.reject(error);
//     }
//   }
// );

export default jwtInterceoptor;