import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Gallery from './pages/gallery'
import Home from './pages/home'
import Contact from './pages/contact'

// then our route config
const routes = [
    {
        path: '/home',
        component: Home
    },
    {
    path: "/gallery",
    component: Gallery
    },
    {
    path: "/contact",
    component: Contact,
    // routes: [
    //     {
    //     path: "/conatact/bus",
    //     component: Bus
    //     },
    //     {
    //     path: "/conatact/cart",
    //     component: Cart
    //     }
    // ]
    }
];

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
function RouteWithSubRoutes(route) {
    return (
    <Route
        path={route.path}
        render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
        )}
    />
    );
}

function RouteConfigExample() {
    return (
    <Router>
        <div>

        {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
        ))}
        </div>
    </Router>
    );
}

export default RouteConfigExample;