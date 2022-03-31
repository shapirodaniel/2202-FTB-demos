// string libraries are useful
// when you need to pass a mission critical piece of info
// to a function, that's a string
const methods = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
};

const BASE_URL = 'http://localhost:3000/api/users';

async function request(uri, method, headers, body) {
  return await fetch(uri, {
    method,
    headers,
    body: JSON.stringify(body),
  });
}

export async function registerUser(userCredentials) {
  try {
    const URI = `${BASE_URL}/register`;
    const response = await request(
      URI,
      methods.POST,
      {
        'Content-Type': 'application/json',
      },
      userCredentials
    );
    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
}

export async function loginUser(userCredentials) {
  try {
    const URI = `${BASE_URL}/login`;
    const response = await request(
      URI,
      methods.POST,
      {
        'Content-Type': 'application/json',
      },
      userCredentials
    );
    const data = await response.json();
    return data;
  } catch (err) {
    throw err;
  }
}
