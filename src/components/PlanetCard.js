import React, { Component } from 'react'

import { PlanetService } from '../service/PlanetService'
import { DivCard, PlanetInfo, PlanetFilmsInfo } from "../styles"
import { Card, Button } from 'react-bootstrap'
import { Dimmer, Loader } from 'semantic-ui-react'
// import { Card, CardContent, CardActions, Button, CardHeader } from '@material-ui/core';

export default class PlanetCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            loading: true,
            error: '',
            planet : {
                name:'',
                population:'',
                climate:'',
                terrain:'',
                films:[]
            }
        }
        this.getRandomPlanet = this.getRandomPlanet.bind(this)
        this.getNextPlanet = this.getNextPlanet.bind(this)
    }

    getRandomPlanet(){
        PlanetService.getRandomPlanet().then(data => {
            this.setState({
                loading: false,
                planet: data,
                error:''
            })
        }).catch(e => {
            console.log(e);
            e.setState({ error: "Erro ao buscar um novo planeta!", loading: false });
        });
    }

    getNextPlanet(){
        this.setState({loading:true})
        this.getRandomPlanet()
    }

    componentWillMount(){
        this.getRandomPlanet()
    }

    render(){
        const { loading, planet } = this.state;

        return(
            <DivCard>
                {(loading) ? (
                    <Dimmer active>
                        <Loader indeterminate>Carregando Planeta</Loader>
                    </Dimmer>
                ) : (
                    
                    <Card border="dark" style={{ backgroundColor: '#9B9B9B'}} className="text-center">
                        <Card.Header>{planet.name}</Card.Header>
                        <Card.Body style={{ backgroundColor: '#cfcfcf' }}> 
                            <div>
                                <PlanetInfo>Population: <div>{planet.population}</div></PlanetInfo>
                                <PlanetInfo>Climate: <div>{planet.climate}</div></PlanetInfo>
                                <PlanetInfo>Terrain: <div>{planet.terrain}</div></PlanetInfo>
                                <PlanetFilmsInfo>Featured in &nbsp;<div>{planet.films.length}</div>&nbsp; film{planet.films.length === 1 ? "" : "s"}</PlanetFilmsInfo>
                            </div>
                            <Button variant="dark" onClick={this.getNextPlanet} >Next</Button>
                        </Card.Body>
                    </Card>
                )}
                {this.state.error}
            </DivCard>
        )
    }
}