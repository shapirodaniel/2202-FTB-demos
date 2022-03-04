# Using the fetch API to modify an existing REST API

## Getting started

`npm i` to install dependencies  
`npm run start:server` to launch the REST API via json-server on localhost:4000  
`npm run start:client` to launch the SPA on localhost:3000

## How it works

Each button sends a GET, POST, PATCH, or DELETE request to the REST API hosted at localhost:4000/todos, which serves up the `db.json` file

Try modifying the data in each `fetch` request to learn more about how HTTP requests communicate with REST APIs!
