import axios from 'axios'

const request = axios.create({
    // http://localhost:8080
    // "https://gametientri-production.up.railway.app/"
    baseURL: "https://gametientri-production.up.railway.app/",
    withCredentials: true
})

export default request;