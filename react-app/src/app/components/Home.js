import React, { Component } from "react";
import Like from "./Like";
import { Helmet } from 'react-helmet';
import store from "../Store";

export default class Home extends Component {
    constructor() {
        super();
        this.state = {           
            show: true
        };
        console.log("home comp created");
        this.toggleLike = this.toggleLike.bind(this);
    }

    componentDidMount() {
       this.handle = setInterval(()=>{
            // this.state.homeLikes++;
            // //trigger render function
            // react api
            // this.forceUpdate();
            //set new state
            // trigger render
            // this.setState({
            //     homeLikes : this.state.homeLikes +1
            // })
            store.dispatch({
                type:'INCREMENT'
            })

        },2000)

        this.unsubscribeFn = store.subscribe(()=> this.forceUpdate());
    }

    componentWillUnmount(){
        clearInterval(this.handle);
        this.unsubscribeFn();
    }

    // e is even object
    toggleLike(e) {
        console.log("toggle", e);
        console.log(this);
        e.stopPropagation();
        this.setState({
            show: !this.state.show
        })
    }
    clickEvent(e) {
        console.log("Div Click", e);
        this.Like.sayHello();
    }

    render() {
        // console.log("home render called");
        return (
            
            <div onClick={(e) => this.clickEvent(e)}>
                <Helmet>
                        <title>Home</title>
                    </Helmet>
                <h2>Home</h2>
                <span> Home Likes {store.getState().counterState} </span>
                <button onClick={this.toggleLike}>
                    Show/Hide
            </button>
                {this.state.show && <Like count={store.getState().counterState}
                    title="Like Content" ref={(elem) => { this.Like = elem }} >
                </Like>}
            </div>)
    }

    shouldComponentUpdate(nextProps, nextState) {
        // console.log(nextState);
        if (store.getState().counterState % 2 == 0)
            return true;
        return false;
    }
}