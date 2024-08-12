import axios from "axios";
import { BASE_URL } from "./constants";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type" : "application/json",
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const applicantToken = localStorage.getItem("applicantToken");
        const adminToken = localStorage.getItem("adminToken");

        if (config.url.startsWith("/admin")) {
           
                config.headers.Authorization = `Bearer ${adminToken}`;
            
        } else { 
           
                config.headers.Authorization = `Bearer ${applicantToken}`;
            
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;