import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  & {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
    margin-bottom: 1rem;

    a {
      padding: 0.5rem;
      margin-left: 0.5rem;
    }

    a.active:not(#logo) {
      background-color: lightblue;
      color: black;
      font-weight: bold;
    }

    #logo {
      padding-left: 0;
      margin-left: 0;
    }

    #logo:hover {
      text-decoration: underline;
    }
  }
`;

const navLinks = [
  { id: 1, name: 'home', to: '/home' },
  { id: 2, name: 'about', to: '/about' },
  { id: 3, name: 'contact', to: '/contact' },
  { id: 4, name: 'blog', to: '/blog' },
];

export default function Nav() {
  return (
    <NavContainer>
      <NavLink id="logo" to="/">
        {'[logo]'}
      </NavLink>
      <div>
        {navLinks.map(({ id, name, to }) => (
          <NavLink key={id} to={to}>
            {name}
          </NavLink>
        ))}
      </div>
    </NavContainer>
  );
}
