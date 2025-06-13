import axios from "axios"

const instance = axios.create({
    baseURL : "https://backend-1-g6cv.onrender.com/"
})

export default instance