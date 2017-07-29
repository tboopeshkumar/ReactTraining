import React, { Component } from "react";
import { Helmet } from 'react-helmet';

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            members: ['Member 1', "Member 2"],
            name: 'Member Name'
        }
    }

    componentDidMount() {

    }

    addMember(e) {
        //this.state.members.push(this.input.value); // not a standard way to directly update state variable
        this.setState({
            members: [...this.state.members, this.state.name],
        })
    }

    handleValueChange(e) {
        this.setState({
            name: e.target.value
        })
    }

    render() {
        const list = this.state.members
            .map((m, i) => (
                <li key={i}>
                    {m}
                </li>
            ))
        return (<div>
            <h2>About</h2>
            <Helmet>
                <meta description="About" />
                <title>About</title>
            </Helmet>
            <input name="name"
                value={this.state.name}
                onChange={(e) => {
                    this.handleValueChange(e);
                }}
            />
            <button onClick={(e) => this.addMember(e)}>Add</button>
            <ul>
                {list}
            </ul>
        </div>)
    }
}