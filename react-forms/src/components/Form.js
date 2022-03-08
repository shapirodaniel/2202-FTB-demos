import React from 'react';
import styled from 'styled-components';
import { useForm } from '../custom-hooks/useForm';

const FormContainer = styled.form`
  & {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }

  & > div {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
`;

export default function Form({
  addNewProductFromForm,
  selectedProduct,
  replaceEditedProduct,
  clearSelectedProduct,
}) {
  // by extracting all state management to a custom hook
  // we gain readability, maintainability
  // we also provide a minimal API for our mid-tier
  // this will let us make changes to the underlying data fetching
  // without having to deal with those changes at the presentation layer
  const { form, handleChange, handleSubmit } = useForm({
    addNewProductFromForm,
    selectedProduct,
    replaceEditedProduct,
  });

  return (
    <FormContainer onSubmit={handleSubmit}>
      {form.id && (
        <div>
          <label>Id</label>
          <div>{form.id}</div>
        </div>
      )}
      <div>
        <label>Price</label>
        <input
          type="text"
          name="price"
          value={form.price}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Description</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
        <label>Product Link</label>
        <input
          type="text"
          name="url"
          value={form.url}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>In Stock</label>
        <input
          type="checkbox"
          name="inStock"
          checked={form.inStock}
          onChange={handleChange}
        />
      </div>
      <button name="clear" onClick={() => clearSelectedProduct()}>
        Clear Product Info
      </button>
      <input type="submit" value="Add Product" />
      <input type="submit" value="Edit Product" />
    </FormContainer>
  );
}
