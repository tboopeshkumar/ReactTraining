"use strict";
import React, { Component } from 'react'
//import { Header } from './components/Header'
import { Footer } from './components/Footer'
import Header from "./components/HeaderContainer"

export class App extends React.Component {
    render() {
        return (
            <div>
                <Header title="React app"></Header>
                {/* view container */}
                <div>
                    {this.props.children}
                </div>
                <Footer company="Sapient" year="2017"></Footer>
            </div>
        )
    }
}