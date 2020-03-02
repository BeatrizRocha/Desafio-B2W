import axios from 'axios';

const client = axios.create({
    baseURL: "https://cors-anywhere.herokuapp.com/https://swapi.co/api/", // Is an API to enable cross-origin between the main server and the front-end application
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        'Accept-Language': 'pt-BR,pt;q=0.5'
    }
});

const api = function(options) {
    const onSuccess = (typeof options.onSuccess !== "undefined") ? options.onSuccess : response => {
        return response.data;
    }
    const onError = (typeof options.onError !== "undefined") ? options.onError : error => {
        console.debug(error);
        return false;
    }

    return client(options).then(onSuccess).catch(onError);
}

export default api;