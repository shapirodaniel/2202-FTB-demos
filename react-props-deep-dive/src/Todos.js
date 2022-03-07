import React from 'react';
import SingleTodo from './SingleTodo';
import './styles/Todos.css';

export default function Todos(props) {
  const { todos } = props;

  const todoList = todos.map((todo) => (
    <SingleTodo key={todo.id} todo={todo} />
  ));

  return (
    <div id="todos-container">
      {/* the map() higher-order function returns an array
      so what is going on here?? react is smart enough to know that an entire array full of JSX should be rendered into the DOM regardless of whether we call .join() or not */}
      {todoList}
    </div>
  );
}
