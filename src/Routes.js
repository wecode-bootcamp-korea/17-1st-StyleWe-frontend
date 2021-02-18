import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UploadContent from './Pages/Community_Main/Uploadcontent';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={UploadContent} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
