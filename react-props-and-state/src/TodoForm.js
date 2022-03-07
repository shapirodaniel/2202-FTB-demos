import React, { useState } from 'react';
import styled from 'styled-components';

// since this component is ONLY relevant to its parent component
// we're defining it in this file
// most React components get their own file, this is a fun exception
const FormField = (props) => {
  const { label, htmlFor, type, name, value, onChangeHandler } = props;

  return (
    <div>
      <label htmlFor={htmlFor}>{label}</label>
      {/* ternary statements are used pretty widely in React to perform "conditional rendering", which means, only show certain components based on the underlying data. here, we're looking at the type of object passed as props: if it's a checkbox, we'll render a checked and a defaultChecked prop, otherwise, it'll be a text input. this is important, as certain kinds of inputs (like checkboxes) deviate from the expected "location" of data, like the .value property of text/password inputs... */}
      {type === 'checkbox' ? (
        <input
          type={type}
          name={name}
          checked={value}
          defaultChecked={value}
          onChange={(e) => onChangeHandler(e)}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={(e) => onChangeHandler(e)}
        />
      )}
    </div>
  );
};

// the ampersand (&) below refers to the root element of the container
// in this case, it's a <section />
const TodoFormContainer = styled.section`
  & {
    display: flex;
    flex-direction: column;
  }

  & form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    border: 1px solid black;
    border-radius: 4px;
    padding: 1rem;
  }

  & form > div {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    width: 200px;
  }
`;

const TodoForm = (props) => {
  // here, we're initializing state as an OBJECT
  // this allows us to encapsulate all state changes and pass a single set of values
  // we'll leverage "spread syntax" to make those state updates in the onChange handler supplied to this component
  const [form, setForm] = useState({
    id: '',
    name: '',
    done: false,
  });

  // this function is typical in React "controlled" forms (more on that soon ...)
  // here, we're using the event object to find out if a checkbox was clicked and update state accordingly
  // otherwise, based on our form inputs, it's a text field
  // notice the early return! by returning inside the conditional statement we can avoid using an "else" block, which makes our code a bit more readable
  const handleChange = (e) => {
    if (e.target.type === 'checkbox') {
      console.log('checkbox');
      setForm({ ...form, [e.target.name]: e.target.checked });
      return;
    }

    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // mapping over arrays of objects is a great way to keep your React DRY
  // here, we're defining all the fields the FormField component expects
  // so that we can reuse the component for different types of label/input combinations
  // this will also allow us to easily modify the look/behavior of our form in the future
  // since all changes will be ENCAPSULATED under one component, and all props
  // will be GENERALIZED, rather than hard-coded
  const formFields = [
    {
      id: 1,
      label: 'id',
      htmlFor: 'id',
      type: 'text',
      checked: form.id,
      name: 'id',
      onChangeHandler: handleChange,
    },
    {
      id: 2,
      label: 'name',
      htmlFor: 'name',
      type: 'text',
      value: form.name,
      name: 'name',
      onChangeHandler: handleChange,
    },
    {
      id: 3,
      label: 'done',
      htmlFor: 'done',
      type: 'checkbox',
      checked: form.done,
      name: 'done',
      onChangeHandler: handleChange,
    },
  ];

  // submit handlers always call the .preventDefault() method on the event they receive, which keeps the page from reloading -- this is the default behavior of all submit types / buttons placed within forms, but we want to avoid that for the simple fact that we'd like a SPA, not an MPA (multi-page app)...
  const handleSubmit = (e) => {
    e.preventDefault();
    props.createTodo(form);
  };

  return (
    <TodoFormContainer>
      {/* every event handler callback receives the event that triggered it by default, here, we're leveraging that knowledge to create a handleSubmit function with a single parameter for the supplied event -- even though we don't "see" the event being passed here, it will be! */}
      <form onSubmit={handleSubmit}>
        {formFields.map((formField) => {
          // we're using "spread syntax" here to pass all values
          // from the formField object in as props to the underlying component
          // ie, ...formField places id, label, htmlFor, type, checked/value, name, onChangeHandler as though we listed those key-value pairs individually
          return <FormField key={formField.id} {...formField} />;
        })}
        {/* this is equivalent to an ordinary button, but better semantics: a submit button is just another input type, to a form */}
        <input type="submit" value="create todo!" />
      </form>
    </TodoFormContainer>
  );
};

export default TodoForm;
