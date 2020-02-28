import axios from "axios"

const api = axios.create({
    baseURL: "https://swapi.co/api/",
    mode: 'no-cors',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
    credentials: 'same-origin'
});

api.interceptors.response.use(function (response) {
    return response
}, function (error) {
    console.log(error)
    return Promise.reject(error)
});

export default api