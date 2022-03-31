import React, { useState, useEffect } from 'react';
import { useUsers } from './custom-hooks/users';

function App() {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });
  const [token, setToken] = useState('');
  const { loginUser } = useUsers();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();

        try {
          const { message, token } = await loginUser(form);
          setToken(token);
          console.log(message);
        } catch (err) {
          console.error(err);
        }
      }}
    >
      <div>
        <div>isLoggedIn?: {(!!token).toString()}</div>
        <div>token: {token}</div>
        <br />
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <input type="submit" value="login" />
      </div>
    </form>
  );
}

export default App;
