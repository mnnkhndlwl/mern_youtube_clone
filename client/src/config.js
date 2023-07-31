import axios from "axios";

// export const axiosInstance = axios.create({
//     baseURL : "https://mnnyotube.herokuapp.com/"
// })

// export const axiosInstance = axios.create({
//     baseURL : "https://youtube-backend-93iq.onrender.com/"
// })

// export const axiosInstance = axios.create({
//     baseURL : "http://localhost:3001/"
// })

// import axios from "axios";

// //let axios = Axios.create({ withCredentials: true });

//  // axios.defaults.withCredentials = true;

// export const axiosInstance = axios.create({
//     baseURL : "http://localhost:5000/"
// });
const BASE_URL = "http://localhost:3001/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";
// console.log(localStorage.getItem("root"));
const user = JSON.parse(localStorage.getItem("root"))?.user;
//console.log(user);
var TOKEN;
const currentUser = user && JSON.parse(user).currentUser;
TOKEN = currentUser?.token;
//console.log(TOKEN);
// if(JSON.parse(JSON.parse(localStorage.getItem("root"))?.user).currentUser['token'] != null) {
//   var TOKEN;
// try {
//   TOKEN = JSON.parse(JSON.parse(localStorage.getItem("root"))?.user).currentUser['token'];
//   console.log(TOKEN);
// } catch (error) {
//   console.log(error);
// }

//   console.log(TOKEN);
// }

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
