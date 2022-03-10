import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// you might think why do i need exact and Switch?
// defensive programming: fallbacks for safety

export default function Routes() {
  return (
    <Router>
      {/* the Switch component prevents react router from rendering multiple components if there are multiple route matches */}
      {/* try commenting out the Switch component tags as well as the exact keyword to see what happens! */}
      <Switch>
        {/* the exact keyword prevents reac router's default fuzzy matching behavior, which prevents the root path from overriding matches the about / contact routes */}
        {/* try commenting the exact keyword out and notice the behavior change! */}
        <Route exact path="/">
          <div>im the home page!</div>
        </Route>
        <Route path="/about">
          <div>im the about page!</div>
        </Route>
        <Route path="/contact">
          <div>im the contact page!</div>
        </Route>
      </Switch>
    </Router>
  );
}
