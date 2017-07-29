import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Header extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <div>
                  
                    <NavLink to="/" className="button" activeClassName="success">Home</NavLink>
                    <NavLink to="/about"  className="button" activeClassName="success">About</NavLink>
                    <NavLink to="/contact/blr" className="button" activeClassName="success">Contact</NavLink>
                    
                </div>
            </div>
        )
    }
}