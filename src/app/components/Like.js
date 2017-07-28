import React,  {Component} from "react";

export default class Like extends Component{

    //1. 

    //view is not ready
    constructor(props){
        super(props);
        console.log("Like comp created");
    }

    //2.
    //view is not ready
    componentWillMount(){
        // do soemthing not related to view update
    }

    //3.
    //render called many times
    render(){
        console.log("like render called");
        return (<div>
            <h2>Like - {this.props.count}</h2>
        </div>)
    }

    //4.
    //mounted on real DOM
    componentDidMount(){

    }

    //5. Last
    //just before removing component from view
    componentWillUnmount(){

    }  

    //componentWillReceiveProps - called whenever a property changes from parent to child
    componentWillReceiveProps(props){
            console.log("Component will receive ", props);
    }

    shouldComponentUpdate(nextProps,nextState){
        //should return boolean value;
        // true - calls render
        // false - prevent render to call
        console.log("nextProps: ",nextProps);
        console.log("nextState: ",nextState);
        if(nextProps.count % 5 == 0)
            return true;
        return false;
    }
    


}