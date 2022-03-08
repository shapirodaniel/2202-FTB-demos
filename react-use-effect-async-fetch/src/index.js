import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';

const App = (props) => {
  return (
    <Fragment>
      <h1>Todo</h1>
      <Todo />
    </Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
