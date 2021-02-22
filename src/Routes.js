import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CommunityNav from "./Components/Nav/CommunityNav/CommunityNav";
import StoreNav from "./Components/Nav/StoreNav/StoreNav";
import CommunityMain from "./Pages/Community_Main/CommnunityMain";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={CommunityMain} />
          <Route exact path="/CommunityNav" component={CommunityNav} />
          <Route exact path="/StoreNav" component={StoreNav} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
