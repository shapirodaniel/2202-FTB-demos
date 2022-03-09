const axios = require('axios');

const BASE_URL = 'https://api.harvardartmuseums.org';
const KEY = 'apikey=<your-api-key-goes-here>'; // USE YOUR KEY HERE

async function fetchObjects() {
  const url = `${BASE_URL}/object?${KEY}`;

  // fetch is only defined in the browser
  // it's a web API
  // since Node.js doesn't understand/know what fetch is,
  // we need an external client that can make network requests
  // on Node's behalf
  // usually the choice is axios, an isomorphic fetch library

  /* fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.error(error);
    }); */

  // axios converts the underlying stream for us, so one call returns the response directly
  // from there, data is found on a data field, which we're logging below
  // console.dir(obj, { depth: null }) lets us log deeply-nested complex data structures like arrays/objects to the console
  const response = await axios.get(url);

  console.dir({ data: response.data }, { depth: null });
}

fetchObjects();
