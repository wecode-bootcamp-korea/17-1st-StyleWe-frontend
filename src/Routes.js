import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from "./Pages/Sign_in_up/signin";
import Signup from "./Pages/Sign_in_up/signup";
import Signuplast from "./Pages/Sign_in_up/signuplast";
import Cart from "./Pages/Cart/cart";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signuplast" component={Signuplast} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
