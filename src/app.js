import React, { Component } from "react";
import PropTypes from "prop-types";
import routes from "./shared/routes";
import { Route, Switch } from "react-router-dom";
import Navbar from "./shared/nav";
// import RouteWithSubRoutes from "./subroutes";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          {
            routes.map(({ path, exact, component: Component, ...rest }) => (
              <Route
                key={path}
                exact={exact}
                path={path}
                render={(props) => (
                  <Component {...props} {...rest} />
                )}
              />
            ))
          }
        </Switch>
      </>
    );
  }
}

App.propTypes = {
  data: PropTypes.array
};

export default App;