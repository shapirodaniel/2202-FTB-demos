// importing the toplevel React library here
import React from 'react';
// import to inject our React application into the index.html
import ReactDOM from 'react-dom';
// inject all css from the linked file
import './index.css';
// importing the React component from the specified file
// what kind of import is this? ie, default or non-default
// imports without curly braces are default
// imports with curly braces are non-default, ie named exports
import Feed from './Feed';

ReactDOM.render(
  // inline component declarations built from JSX returned from those components
  // React.StrictMode is a stricter interpretation of React syntax
  // it gives more helpful error messages
  // it wraps the root of our component tree
  <React.StrictMode>
    <Feed />
  </React.StrictMode>,
  // the HTML node we're targeting in our root index.html to inject the React application
  document.getElementById('root')
);
