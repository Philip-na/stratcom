import axios from "axios";

const url = "http://localhost:3000/"


const axiosInstance = axios.create({
    baseURL: url,
    timeout: 18000,
    headers: {
        'Content-Type': "application/json",
        Accept: 'application/json'
    }
})

export default axiosInstance;