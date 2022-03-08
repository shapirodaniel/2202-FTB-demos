import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Loading = () => {
  return <div>...Loading</div>;
};

const Resolved = () => {
  return <div>data resolved</div>;
};

const App = () => {
  const [show, setShow] = useState(false);

  // conditional rendering: mount a component based on some stateful value
  // we are leveraging functional programming
  // specifically, declarative programming techniques
  // to ask React to just give us whatever we want to see
  // ...we don't need to know "how", React takes care of that for us
  return (
    <main>
      {/* conditional rendering based on ternary statement */}
      {show ? <Resolved /> : <Loading />}
      {/* conditional rendering based on isolated logical conjunctions */}
      {/* {show && <Resolved />}
      {!show && <Loading />} */}
      <button
        onClick={() => {
          // flip the boolean value we're storing on state
          setShow(!show);
        }}
      >
        toggle show status
      </button>
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
