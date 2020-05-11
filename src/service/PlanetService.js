import api from "./Api"

function getRandomPlanet(e) {
    let randomId = Math.floor(Math.random() * 60) + 1 // Generate a random number between 1 and 60

    return api({
        url: "/planets/" + randomId,
        method: "GET"
    })
}


export const PlanetService = {
    getRandomPlanet
}