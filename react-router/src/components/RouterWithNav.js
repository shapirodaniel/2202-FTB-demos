import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Blog from './Blog';
import SingleBlog from './SingleBlog';
import NewBlogForm from './NewBlogForm';
import styled from 'styled-components';

const Layout = styled.section`
  & {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
  }
`;

export default function RouterWithNav() {
  return (
    <Router>
      <Nav />
      <Layout>
        <Switch>
          <Route exact path="/">
            <div>welcome!</div>
          </Route>
          <Route path="/home">
            <div>im the home page!</div>
          </Route>
          <Route path="/about">
            <div>im the about page!</div>
          </Route>
          <Route path="/contact">
            <div>im the contact page!</div>
          </Route>
          {/* without the exact keyword, the Blog route will clobber the SingleBlog route */}
          <Route exact path="/blog" component={Blog} />
          {/* the /blog/new path must be placed above the wildcard route, otherwise, :blogId will clobber "new" */}
          <Route path="/blog/new" component={NewBlogForm} />
          <Route path="/blog/:blogId" component={SingleBlog} />
        </Switch>
      </Layout>
    </Router>
  );
}
