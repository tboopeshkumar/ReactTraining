import React, { Component } from "react";
import { Helmet } from 'react-helmet';
export default class Contact extends Component {
    constructor(props) {
        super(props);
        //routers add the attribute
        console.log(props.match.url);
        console.log(props.match.path);

    }
    render() {
        return (<div>
            <Helmet>
                <title>Contact {this.props.match.params['city']}</title>
            </Helmet>
            <h2>Contact - {this.props.match.params['city']}</h2>
        </div>)
    }
}