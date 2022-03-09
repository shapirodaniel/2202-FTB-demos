import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Blog from './Blog';
import styled from 'styled-components';

const Layout = styled.section`
  & {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
  }

  @media screen and (min-width: 770px) {
    & {
      flex-direction: row;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: center;
    }

    & article {
      flex: 0 0 40%;
      margin: 1rem;
      min-height: 300px;
      max-height: 300px;
    }
  }
`;

export default function RouterWithNav() {
  return (
    <Router>
      <Nav />
      <Layout>
        <Switch>
          <Route exact path="/">
            <div>im the home page!</div>
          </Route>
          <Route path="/about">
            <div>im the about page!</div>
          </Route>
          <Route path="/contact">
            <div>im the contact page!</div>
          </Route>
          <Route path="/blog" component={Blog} />
        </Switch>
      </Layout>
    </Router>
  );
}
