import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CommunityNav from "./Components/Nav/CommunityNav/CommunityNav";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={CommunityNav} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
