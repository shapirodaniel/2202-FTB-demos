// React library is the default export from the node_modules/react sub-directory
// useState is a named export (a non-default export) from the same place
// utilizing both types of export is fairly common in frontend projects
import React, { useState } from 'react';
// ReactDOM lets us inject the compiled JSX -> which has become actual elements that can be inserted into the DOM in the usual way (with .createElement(), .appendChild(), etc.)
import ReactDOM from 'react-dom';
// most of your React components will be the default export in their file
import Todos from './Todos';
import TodoForm from './TodoForm';

// initial data to seed our React application
// this data will often come from external sources like remote APIs
const initialTodos = [
  { id: 1, name: 'take out trash', done: true },
  { id: 2, name: 'do dishes', done: true },
  { id: 3, name: 'walk dog', done: false },
  { id: 4, name: 'groceries', done: true },
];

const App = () => {
  const [todos, setTodos] = useState(initialTodos);

  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <main>
      <Todos todos={todos} />
      <TodoForm createTodo={createTodo} />
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
