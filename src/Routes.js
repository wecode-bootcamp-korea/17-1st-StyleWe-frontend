import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CommunityMain from "./Pages/Community_Main/CommnunityMain";
import ProductDetailPage from "./Pages/Store_Main/ProductDetailPage/ProductDetailPage";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ProductDetailPage} />{" "}
          {/* /product/detail/1 */}
          <Route exact path="/CommunityMain" component={CommunityMain} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
