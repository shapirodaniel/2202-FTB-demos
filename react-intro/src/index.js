import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// ReactDOM actually places our app code in the live site
// by targeting a root element, oftentimes, by an id="root"

// JSX looks exactly like HTML, but it's not
// ...but you can kind of think of it like HTML
const JSX = (
  <section>
    <header>
      <h1>Welcome to React! :)</h1>
    </header>
    <main>
      <aside>
        <ul>
          <li>10</li>
          <li>9</li>
          <li>8</li>
        </ul>
      </aside>
    </main>
    <footer>&copy; 2022 me</footer>
  </section>
);

const Topping = (props) => {
  // reminder! the props object will likely contain
  // a type field with a value like: { type: 'cheese' }
  console.log(props);

  return (
    <li
      className={props.selectedTopping === props.type ? 'selected' : undefined}
      onClick={() => {
        props.selectTopping(props.type);
      }}
    >
      {props.type}
    </li>
  );
};

const ToppingsList = (props) => {
  // even if we don't use props, every function component receives them
  console.log(props);

  // the convention is to always call your React setter
  // the second arg returned in the destructured array
  // we receive from useState, setWhatever
  const [topping, setTopping] = useState('cheese');

  console.log(typeof topping);
  console.log(typeof setTopping);

  // by defining a function in the scope of the parent component
  // we can make state updates happen even if they're triggered downstream
  // this is an "escape hatch" we can use to circumvent the ordinary flow of data in React, which is unidirectional
  const selectTopping = (topping) => {
    setTopping(topping);
  };

  return (
    <section>
      <ul>
        <Topping
          selectTopping={selectTopping}
          selectedTopping={topping}
          type={'cheese'}
        />
        <Topping
          selectTopping={selectTopping}
          selectedTopping={topping}
          type={'broccoli'}
        />
        <Topping
          selectTopping={selectTopping}
          selectedTopping={topping}
          type={'pepperoni'}
        />
      </ul>
    </section>
  );
};

// we are working in a funtional programming paradigm, and we're leveraging composition over inheritance
// inheritance is the idea that classes can pass their blueprint down to their "children", where a child either extends or implements the class interface
// composition is the simple utilization of higher-order functions and functions-within-functions to leverage what's known in the body of the functions -- ie, their SCOPE -- to bind certain pieces of data and guarantee that what we want to manipulate is there when need it to be

ReactDOM.render(<ToppingsList />, document.getElementById('app'));
