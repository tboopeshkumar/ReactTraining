import React,  {Component} from "react";
import Like from "./Like";

export default class Home extends Component{
    constructor(){
        super();
        this.state ={
            homeLikes : 1000
        };
        console.log("home comp created");
    }

    componentDidMount(){
        setInterval(()=>{
            // this.state.homeLikes++;
            // //trigger render function
            // react api
            // this.forceUpdate();
            //set new state
            // trigger render
            this.setState({
                homeLikes : this.state.homeLikes +1
            })
    
        },2000)
    }
    render(){
        console.log("home render called");
        return (<div>
            <h2>Home</h2>
            <span> Home Likes {this.state.homeLikes} </span>
            <Like count={this.state.homeLikes} title="Like Content">
            </Like>
        </div>)
    }

     shouldComponentUpdate(nextProps,nextState){
        console.log(nextState);
        if(nextState.homeLikes % 2 == 0)
            return true;        
        return false;
    }
}