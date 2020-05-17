import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Home } from './components/Home';
import { Work } from './components/Work';
import { Blogs } from './components/Blogs';
import { About } from './components/About';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/work" component={Work} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
