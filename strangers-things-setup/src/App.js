import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { useAuth } from './custom-hooks';
import { LoginOrRegister, Posts, Nav, NewPost, Me } from './components';

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <Router>
      <Nav />
      <Switch>
        {/* logged in routes */}
        {isLoggedIn && (
          <>
            {/* anything that requires an authorization header in the fetch, any CREATE, UPDATE, or DELETE action */}
            <Route exact path="/posts" component={Posts} />
            <Route path="/posts/new" component={NewPost} />
            <Route path="/me" component={Me} />
          </>
        )}

        {/* logged out routes */}
        {!isLoggedIn && (
          <>
            {/* anything that requires an authorization header in the fetch, any CREATE, UPDATE, or DELETE action */}
            <Route exact path="/posts" component={Posts} />
            <Route path="/login" component={LoginOrRegister} />
            <Route path="/register" component={LoginOrRegister} />
          </>
        )}
      </Switch>
    </Router>
  );
}

export default App;
