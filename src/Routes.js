import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CommunityNav from "./Components/Nav/CommunityNav/CommunityNav";
import StoreNav from "./Components/Nav/StoreNav/StoreNav";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={CommunityMain} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
