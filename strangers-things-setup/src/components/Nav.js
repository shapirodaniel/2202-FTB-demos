import React from 'react';
import { useAuth } from '../custom-hooks';
import { NavLink } from 'react-router-dom';

const loggedInLinks = [
  { id: 1, to: '/posts/new', name: '+ new post' },
  { id: 2, to: '/posts', name: 'posts' },
];

const loggedOutLinks = [
  { id: 1, to: '/home', name: 'home' },
  { id: 2, to: '/posts', name: 'posts' },
];

export default function Nav() {
  const { isLoggedIn, logout } = useAuth();
  const navLinks = isLoggedIn ? loggedInLinks : loggedOutLinks;

  return (
    <nav>
      {navLinks.map(({ id, to, name }) => (
        <NavLink key={id} to={to}>
          {name}
        </NavLink>
      ))}
      {isLoggedIn && <button onClick={logout}>logout</button>}
    </nav>
  );
}
