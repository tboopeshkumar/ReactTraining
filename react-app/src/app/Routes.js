import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { App } from "./App";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Cart from './cart/containers/CartContainer';
import ListExample from "./components/ListExample";
import ListInfinite from "./components/ListInfinite";

import ProductRoutes from "./product/Routes";

export default function Routes(props) {
    return (
        <Router>
            <App>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/contact/:city" component={Contact} />
                    <Route path="/about" component={About} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/products">
                        <ProductRoutes>

                        </ProductRoutes>
                    </Route>
                    <Route path="/list" component={ListExample} />
                    <Route path="/infinite"
                        component={ListInfinite}
                    >
                    </Route>

                    <Route path="**" component={NotFound} />
                </Switch>
            </App>
        </Router>
    )
}