import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CommunityMain from './Pages/Community_Main/CommnunityMain';

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
