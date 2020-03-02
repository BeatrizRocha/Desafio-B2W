import React, { Component } from 'react'
import PlanetCard from './components/PlanetCard'
import { DivApp } from "./styles"

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const background = require("./assets/img/dark_space-background.jpg");
        return (
            <DivApp style={{ backgroundImage: `url(${background})` }}>
                <PlanetCard></PlanetCard>
            </DivApp>
        )
    }
}