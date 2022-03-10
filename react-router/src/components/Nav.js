import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const links = [
  { id: 1, name: 'home', to: '/home' },
  { id: 2, name: 'about', to: '/about' },
  { id: 3, name: 'contact', to: '/contact' },
  { id: 4, name: 'blog', to: '/blog' },
];

const NavContainer = styled.nav`
  & {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
    margin-bottom: 1rem;

    a:not(#logo) {
      margin-left: 1rem;
    }

    a.active:not(#logo) {
      background-color: blue;
      color: white;
      font-weight: bold;
      padding: 0.5rem;
      border-radius: 4px;
    }

    #logo:hover {
      text-decoration: underline;
    }
  }
`;

const StyledNavLink = styled(NavLink)``;

export default function Nav() {
  return (
    <NavContainer>
      <NavLink id="logo" to="/">
        {'[logo]'}
      </NavLink>
      <div>
        {links.map(({ id, name, to }) => (
          // the exact keyword prevents fuzzy matching
          // without it, the home path will receive a className = 'active'
          // as well as the downstream paths about or contact
          <StyledNavLink key={id} to={to}>
            {name}
          </StyledNavLink>
        ))}
      </div>
    </NavContainer>
  );
}
