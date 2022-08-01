import axios from "axios";

export const axiosInstance = axios.create({
    baseURL : "https://apunkayoutube.herokuapp.com/"
})