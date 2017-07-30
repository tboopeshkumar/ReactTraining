import React, { Component } from "react";
import { Helmet } from 'react-helmet';
import $ from "jquery";

export default class Contact extends Component {
    constructor(props) {
        super(props);
        //routers add the attribute
        console.log(props.match.url);
        console.log(props.match.path);

    }
    componentDidMount(){
        //$("p").text("from jquery");
        $(this.compElement).find("p").text("from jQuery");
    }
    render() {
        return (<div ref={(elem)=>{this.compElement = elem}}>
            <Helmet>
                <title>Contact {this.props.match.params['city']}</title>
            </Helmet>
            <h2>Contact - {this.props.match.params['city']}</h2>
            <p>change from jquery</p>
        </div>)
    }
}