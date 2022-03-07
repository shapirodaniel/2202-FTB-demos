import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// write your Color component here
const Color = (props) => {
  console.log(props);
  return (
    <div
      className={
        props.color +
        ' ' +
        (props.selectedColor === props.color ? 'selected' : '')
      }
      onClick={() => {
        // we will NEVER have access to updated state values in this arrow function, until the function runs to completion
        // for more info, look into the behavior of the callstack we discussed last week
        console.log(`props.selectedColor was: ${props.selectedColor}`);
        props.setSelectedColor(props.color);
      }}
    />
  ); // since this is JSX we can do slightly different things than we'd need to in the REAL DOM, notably, all tags can be self-closing in JSX
};

const Picker = () => {
  const [selectedColor, setSelectedColor] = useState('red');

  // we will always have access to the latest value of our useState stuff here
  console.log(`props.selectedColor is now: ${selectedColor}`);

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className="red">red</div>
      </div>
      <div id="colors-list">
        <Color
          setSelectedColor={setSelectedColor}
          selectedColor={selectedColor}
          color={'red'}
        />
        <Color
          setSelectedColor={setSelectedColor}
          selectedColor={selectedColor}
          color={'yellow'}
        />
        <Color
          setSelectedColor={setSelectedColor}
          selectedColor={selectedColor}
          color={'blue'}
        />
      </div>
    </div>
  );
};

ReactDOM.render(<Picker />, document.getElementById('app'));
