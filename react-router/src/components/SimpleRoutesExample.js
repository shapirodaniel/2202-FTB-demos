import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// you might think why do i need exact and Switch?
// defensive programming: fallbacks for safety

const Home = (props) => (
  <div>im the home page! props: {JSON.stringify(props)}</div>
);

const About = (routeProps) => <pre>{JSON.stringify(routeProps, null, 2)}</pre>;

const Contact = () => <div>im the contact page!</div>;

export default function Routes() {
  const [token, setToken] = useState('');

  useEffect(() => {
    setToken('token');
  }, []);

  return (
    <Router>
      {/* the Switch component prevents react router from rendering multiple components if there are multiple route matches */}
      {/* try commenting out the Switch component tags as well as the exact keyword to see what happens! */}
      <Switch>
        {/* the exact keyword prevents reac router's default fuzzy matching behavior, which prevents the root path from overriding matches the about / contact routes */}
        {/* try commenting the exact keyword out and notice the behavior change! */}
        <Route
          exact
          path="/"
          render={(routeProps) => <Home token={token} {...routeProps} />}
        />
        <Route
          path="/about"
          render={(routeProps) => <About {...routeProps} />}
        />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}
