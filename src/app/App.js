import React, { Component } from 'react'
import {Header} from './components/Header'
import {Footer} from './components/Footer'
import Home from "./components/Home"

export class App extends React.Component {
    render(){
        return(
            <div>
                <Header title="React app"></Header>
                <Home>
                    
                </Home>
                 <Footer company="Sapient" year="2017"></Footer>
            </div>
        )
    }
}