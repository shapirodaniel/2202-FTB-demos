import React from 'react';
// css via direct file import
import './styles/SingleTodo.css';

export default function SingleTodo(props) {
  const { todo } = props;

  // we can refactor the use of todo.<propertyName> below by further destructuring our todo element, provided that we "typeguard" against a possible empty todo object on first render
  // this is surprisingly easy: we just "fall back" to an empty object if the value isn't defined on first render!
  const { id, name, done } = todo || {}; // this is typeguarding

  // now, in the JSX below, we can use the id, name, and done fields without having to reference the todo object. this keeps our markup clean and maintainable

  return (
    // any class names, ids, other element-level selectors/pseudo-selectors
    // behave exactly as they do in ordinary HTML + CSS
    // here, the todo class ruleset is applied from the linked CSS stylesheet
    // which has a .todo { ... } ruleset
    <div className="todo">
      <div>Id is: {id}</div>
      <div>Name is: {name}</div>
      {/* we're converting the boolean value for todo.done to a string by calling the .toString() method, this allows us to render the actual boolean value in the DOM -- remember, React will accept any valid JavaScript expression inside curly braces when it's nested in valid JSX! so we have to do a bit of additional work to prevent an error from trying to render the BOOLEAN and not the STRING REPRESENTATION of the boolean... */}
      <div>Done status is: {done.toString()}</div>
    </div>
  );
}
