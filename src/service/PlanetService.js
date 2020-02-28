import api from "./Api"

function getRandomPlanet(e) {
    let randomId = Math.floor(Math.random() * 61) + 1 // Generate a random number between 1 and 61
    randomId = 61
    return api.get("/planets/" + randomId).then(res => {
        console.log(res.data)
        return res.data
        // if (res.data) {
        //     return res.data;
        // }
        // e.setState({ error: "Nenhuma regional encontrada", loading: false });
    }).catch(() => {
        // e.setState({ error: "Serviço indisponível!", loading: false });
    });
}


export const PlanetService = {
    getRandomPlanet
}