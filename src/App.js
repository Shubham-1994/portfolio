import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Home } from './components/Home';
import { Work } from './components/Work';
import { Blogs } from './components/Blogs';
import { WorkDetails } from './components/WorkDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/work" component={Work} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/work-details" component={WorkDetails} />
      </Switch>
    </Router>
  );
}

export default App;
