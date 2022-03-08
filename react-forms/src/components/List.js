import React from 'react';
import styled from 'styled-components';

const ProductCard = styled.div`
  & {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border: transparent;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    margin: 1rem;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 1rem;
  }

  & label,
  & > div > span:first-child {
    margin-top: 1rem;
    font-weight: bold;
  }

  & .material-icons {
    color: ${({ inStock }) => (inStock ? 'green' : 'red')};
  }

  & .in-stock-container {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-end;
  }

  & .in-stock-container :last-child {
    margin-left: 0.5rem;
  }
`;

export default function List({ products, setSelectedProduct }) {
  // "lifting state up": often we find out that state is too low in the component hierarchy to be available to sibling components
  // so we need to move the state/effects up to a higher component, and then allow child components to receive that data via props

  return products.map(({ id, price, description, url, inStock }) => {
    return (
      <ProductCard key={id} inStock={inStock}>
        <img src={url} alt="image from random source" />
        <div>
          <span>Price:</span>
          <span>${(price / 100).toFixed(2)}</span>
          <label>Description</label>
          <p>{description}</p>
          <div className="in-stock-container">
            <button
              onClick={() =>
                setSelectedProduct({
                  id,
                  price,
                  description,
                  url,
                  inStock,
                })
              }
            >
              Edit Product
            </button>
            <span className="material-icons">offline_pin</span>
            <span>{inStock ? 'in-stock' : 'out-of-stock'}</span>
          </div>
        </div>
      </ProductCard>
    );
  });
}
