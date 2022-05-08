import axios from "axios";

let instance = axios.create({
    baseURL:"",
    timeout:3000
})
instance.interceptors.request.use((config) => {
    return config
})
instance.interceptors.response.use((response) => {
    return response
})

export default instance