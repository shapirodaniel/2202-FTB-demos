import React, { useState, useEffect } from 'react';

const BASE_URL = 'http://localhost:4000/todos';

const TodoForm = (props) => {
  const { addTodo } = props;

  // controlled forms use useState to manage
  // the input values (text, password, checkbox, textarea, etc)
  const [newTodo, setNewTodo] = useState('');

  // since this function is being supplied to an event listener
  // it will receive the event as its sole prop/param/argument
  const handleChange = (e) => {
    console.log(e.target.value);
    setNewTodo(e.target.value);
  };

  return (
    <form
      className="todo-form"
      // onSubmit handler for forms is triggered by an input with type="submit", however, we attach the onSubmit handler to the form element/JSX itself
      onSubmit={(e) => {
        // this prevents page reload
        e.preventDefault();
        console.log({ newTodo });
        addTodo(newTodo);
        // reset the input field to empty
        // after submitting the form
        // this lets the end user know
        // that their form processing is underway
        // and it makes it easier to re-use the form
        // since the user doesn't have to manually clear it themself
        setNewTodo('');
      }}
    >
      {/* this is a CONTROLLED FORM, rather than let the input manage its own state, which is what we'd normally do for uncontrolled form inputs written directly as HTML / created via document.createElement(), but in React we have this opportunity to manage state locally within the Component itself */}
      <input
        type="text"
        placeholder="...eat pizza :D"
        value={newTodo}
        onChange={handleChange}
      />
      <input type="submit" value="Add Todo" />
    </form>
  );
};

const TodoList = (props) => {
  const { todoList } = props;

  console.log(typeof todoList);
  console.log(Array.isArray(todoList));

  return (
    <div className="todo-list">
      {todoList.map(({ id, description, done }) => (
        // map functions that generate lists of JSX
        // require a key prop on the element being generated
        // this helps React "diff" the virtual DOM vs the actual DOM
        // ...more on this later :D

        // while we could use the index supplied as the second param to the map() HOF, React doesn't love this
        // and it makes maintaining sortable lists difficult in the future...
        // often, we're using an id property that's guaranteed to be unique by virtue of having retrieved the data from a database
        <div key={id}>
          <h3>{description}</h3>
          <div>status: {done.toString()}</div>
        </div>
      ))}
    </div>
  );
};

// i'm going to hack an id by incrementing a global variable
let currentIndex = 5;

const Todo = (props) => {
  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // setup an async function
    // call it
    // all inside the body of this callback function
    // what is this empty array that's supplied as the second argument
    // to useEffect()? a: it's the "dependency array"
    // the dependency array lets us know if anything has changed
    // that's relevant to us refreshing state
    // by rerunning the effect that's been supplied
    async function fetchTodos() {
      // i need error handling to make sure
      // my data either shows up, or if it doesn't, i can handle that situation
      try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        setTodoList(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchTodos();
  }, []);

  /* 
    three ways to innitialize a useEffect statement

    1. one-and-done call: supply an empty dependency array, ie []

    2. update on dependency updates: supply any variables, values that you want to track in the dependency array, so that useEffect is triggered whenever they change
    - example, loggedIn vs loggedOut, where status is a function of an authorization token
  
    3. update continuously, just don't supply a second argument to useEffect
  
  */

  const addTodo = async (todo) => {
    const newTodo = {
      id: ++currentIndex,
      description: todo,
      done: false,
    };

    try {
      // i need to make a network request
      // so we'll use fetch again, with the POST method
      const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTodo),
      });
      const data = await response.json();

      console.log(data);

      setTodoList([...todoList, data]);
    } catch (err) {
      console.error(err);
    }
  };

  function filterList(type) {
    setFilter(type);
  }

  return (
    <div className="todo">
      <TodoForm addTodo={addTodo} />
      <TodoList
        todoList={todoList.filter((val) => {
          switch (filter) {
            case 'all':
              return val;
            case 'complete':
              return val.done;
            case 'incomplete':
              return !val.done;
            default:
              throw new Error('invalid filter');
          }
        })}
      />
      <button onClick={(e) => filterList(e.target.name)} name="all">
        Show All Tasks
      </button>
      <button onClick={(e) => filterList(e.target.name)} name="complete">
        Show Completed Tasks
      </button>
      <button onClick={(e) => filterList(e.target.name)} name="incomplete">
        Show Incomplete Tasks
      </button>
    </div>
  );
};

export default Todo;
