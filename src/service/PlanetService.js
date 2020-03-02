import api from "./Api"

function getRandomPlanet(e) {
    let randomId = Math.floor(Math.random() * 61) + 1 // Generate a random number between 1 and 61

    return api({
        url: "/planets/" + randomId,
        method: "GET"
    })
}


export const PlanetService = {
    getRandomPlanet
}