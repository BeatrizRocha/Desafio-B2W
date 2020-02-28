import React, { Component } from 'react'

import { PlanetService } from '../service/PlanetService'

export default class PlanetCard extends Component {
    constructor(props){
        super(props)
        this.state={
            planet : {
                name:'',
                population:'',
                climate:'',
                terrain:'',
                films:[]
            }
        }
        this.getRandomPlanet = this.getRandomPlanet.bind(this)
    }

    getRandomPlanet(){
        PlanetService.getRandomPlanet().then((data)=>{
            console.log('data :', data);
            // if(!data === undefined){
                this.setState({planet: {
                    name: data.name,
                    population: data.population,
                    climate: data.climate,
                    terrain: data.terrain,
                    films: data.films
                }})
            // }
        })
    }

    componentWillMount(){
        this.getRandomPlanet()
    }

    render(){
        return(
            <div>
                Planet Card
                <div>
                    {this.state.planet.name} <br></br>
                    {this.state.planet.population} <br></br>
                    {this.state.planet.climate} <br></br>
                    {this.state.planet.terrain} <br></br>
                    {this.state.planet.films} <br></br>
                </div>
            </div>
        )
    }
}