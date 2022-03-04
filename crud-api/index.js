// loading css via style-loader / css-loader in webpack.config.js
import './index.css';

// make sure that all your dependencies are connected :)
console.log('script connected!');

// a todo to create!
const todoToCreate = {
  id: 5,
  name: 'learn REST APIs',
  done: false,
};

// REST APIs
// REST means Representational State Transfer
// generally, it's a combination of verbs and nouns
// where the verb tells us what we want to ACCOMPLISH
// and the noun tells us what RESOURCE we want to get/affect

// CRUD stands for Create, Read, Update, Delete
// these are the four key actions we can take on data sources

// GET: R in CRUD
const GET_BTN = document.getElementById('get');
GET_BTN.addEventListener('click', async () => {
  const todos = await getTodos();
  console.log(todos);
});

// POST: C in CRUD
const POST_BTN = document.getElementById('post');

POST_BTN.addEventListener('click', async (e) => {
  // preventDefault() literally prevents whatever default behavior the event exhibits
  // in this case, any button that triggers a POST request is going to, by default, reload our page
  // which is not great for a SPA, since we actually want to fetch that data unbeknownst to the end user
  e.preventDefault();

  const newTodo = await createTodo(todoToCreate);
  console.log('received after successful POST request: ', newTodo);
});

// PATCH: U in CRUD
// PATCH means "partial resource modification"
// unlike the other action that lets us modify resources, which is called PUT, PATCH lets us change certain fields without having to replace the entire object
// so, we like to talk about things being RESTful on REST APIs
// RESTful literally means, does the action i'm about to take on the resource i'm targeting "make sense" as an external consumer of this API?
const PATCH_BTN = document.getElementById('patch');
PATCH_BTN.addEventListener('click', async (e) => {
  e.preventDefault();

  const updatedTodo = await updateTodo(3, { name: 'master the PATCH request' });
  console.log('updated todo is: ', updatedTodo);
});

// DELETE: D in CRUD
const DELETE_BTN = document.getElementById('delete');
DELETE_BTN.addEventListener('click', async (e) => {
  e.preventDefault();

  const deletedTodo = await deleteTodo(4);
  console.log('deleted todo is: ', deletedTodo);
});

// this is an AJAX call
async function getTodos() {
  try {
    // use the fetch() api to get a response from the remote server
    const response = await fetch('http://localhost:4000/todos');

    // deserialize the data from that response with .json()
    const data = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

async function createTodo(todo) {
  try {
    // if we're doing anything other than simple GET requests
    // our fetch() API needs more info, in the form of a config object
    const response = await fetch('http://localhost:4000/todos', {
      method: 'POST',
      // this field lets us attach messages for the remote server
      // to let it know to expect certain things from us, the client
      headers: {
        // this is where we put stuff like: authorization info,
        'Content-Type': 'application/json',
      },
      // this .stringify() method
      // lets us convert objects to strings
      body: JSON.stringify(todo),
    });

    const newTodo = await response.json();
    return newTodo;
  } catch (err) {
    console.error(err);
  }
}

async function updateTodo(todoId, updateFields) {
  try {
    const response = await fetch(`http://localhost:4000/todos/${todoId}`, {
      method: 'PATCH',
      headers: {
        // since there's a hyphen in this key, we can't use the JS convention of declaring fields without strings, since this is NOT a valid variable name in JS!
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateFields),
    });

    const updatedTodo = await response.json();
    return updatedTodo;
  } catch (err) {
    console.error(err);
  }
}

async function deleteTodo(todoId) {
  try {
    const response = await fetch(`http://localhost:4000/todos/${todoId}`, {
      method: 'DELETE',
    });

    const deletedTodo = await response.json();
    return deletedTodo;
  } catch (err) {
    console.error(err);
  }
}
