import axios from "axios";

const Api = axios.create({
    baseURL: "http://192.168.1.10:3001/api",
    headers: {
        "Content-Type":"application/json"
    }
});

export {
    Api
} 