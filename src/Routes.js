import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CommunityMain from './Pages/Community_Main/CommnunityMain';

import UploadContent from './Pages/Community_Main/Uploadcontent';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={CommunityMain} />
          <Route exact path="/upload" component={UploadContent} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
