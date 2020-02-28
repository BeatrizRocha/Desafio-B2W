import React, { Component } from 'react'
import PlanetCard from './components/PlanetCard'

export default class App extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return(
            <div>
                Banana
                <div>
                    <PlanetCard></PlanetCard>
                </div>
            </div>
        )
    }
}