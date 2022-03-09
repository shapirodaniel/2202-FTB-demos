import React from 'react';
import ReactDOM from 'react-dom';
import { SimpleRoutesExample, RouterWithNav } from './components';
import './index.css';

// comment in different examples to try out different aspects of react router!
const App = () => {
  return (
    <main>
      {/* <SimpleRoutesExample /> */}
      <RouterWithNav />
    </main>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
