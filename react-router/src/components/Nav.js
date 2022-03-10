import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const links = [
  { id: 1, name: 'home', to: '/' },
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
  }

  & a {
    margin-left: 1rem;
  }

  & a.active {
    color: green;
    font-weight: bold;
  }

  & #logo {
    padding: 1rem;
    border-radius: 8px;
  }
`;

const StyledNavLink = styled(NavLink)``;

export default function Nav() {
  return (
    <NavContainer>
      <div id="logo">{'< logo >'}</div>
      <div>
        {links.map(({ id, name, to }) => (
          // the exact keyword prevents fuzzy matching
          // without it, the home path will receive a className = 'active'
          // as well as the downstream paths about or contact
          <StyledNavLink key={id} exact to={to}>
            {name}
          </StyledNavLink>
        ))}
      </div>
    </NavContainer>
  );
}
