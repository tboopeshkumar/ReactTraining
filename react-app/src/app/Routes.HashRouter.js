import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { App } from "./App";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound"

export default function Routes(props) {
    return (
        <Router>
            <App>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/contact/:city" component={Contact} />
                    <Route path="/about" component={About} />
                    <Route path="**" component={NotFound} />
                </Switch>
            </App>
        </Router>
    )
}