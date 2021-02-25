import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CommunityMain from "./Pages/Community_Main/CommnunityMain";
import ProductDetailPage from "./Pages/Store_Main/ProductDetailPage/ProductDetailPage";
import Signin from "./Pages/Sign_in_up/signin";
import Signup from "./Pages/Sign_in_up/signup";
import Signuplast from "./Pages/Sign_in_up/signuplast";
import UploadContent from "./Pages/Community_Main/Uploadcontent";
import FeedDetail from "./Pages/Community_Main/FeedDetail";
import SimpleSlider from "./Pages/Store_Main/ProductDetailPage/Slide/Slide";
// import StoreNav from "./Components/Nav/StoreNav/StoreNav";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/simpleSlider" component={SimpleSlider} />
          <Route exact path="/" component={CommunityMain} />
          <Route exact path="/product" component={ProductDetailPage} />{" "}
          {/* /product/detail/1 */}
          <Route exact path="/CommunityMain" component={CommunityMain} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signuplast" component={Signuplast} />
          <Route exact path="/" component={CommunityMain} />
          <Route exact path="/upload" component={UploadContent} />
          <Route exact path="/feed" component={FeedDetail} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
