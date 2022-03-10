import React from 'react';
// for CSS files we just do a direct import of the filepath only
// for components
import './Likes.css';

export default function Likes({ likes }) {
  return (
    <div
      // if we make inline style declarations in React
      // since JSX != HTML, we need to be mindful of the fact
      // that we're actually writing JavaScript, not "real" CSS
      // so all references to CSS rulesets must be made
      // with JS syntax

      // camelCase because we're converting CSS-native kebab-case to the JS equivalent
      // that we'd need to access on the HTMLElement.style interface
      id="like-id"
    >
      <span style={{ fontSize: '10px' }}>{likes}</span>
      <img src="./assets/heart.png" alt="likes" />
    </div>
  );
}
