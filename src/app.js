import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import AppRoutes from "./routes";
import RouteWithSubRoutes from "./subroutes";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          {AppRoutes.map((route) => (
            <RouteWithSubRoutes key={route.path} {...route} />
          ))}
        </>
      </Router>
    );
  }
}