import axios from "axios";

export const axiosInstance = axios.create({
    baseURL : "https://mnnyotube.herokuapp.com/"
})

// export const axiosInstance = axios.create({
//     baseURL : "http://localhost:3001"
// })