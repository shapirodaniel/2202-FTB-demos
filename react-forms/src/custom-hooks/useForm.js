import { useState, useEffect } from 'react';
import { BASE_URL } from '../util';

const initialFormState = {
  price: 0,
  description: '',
  url: '',
  inStock: false,
};

export const useForm = ({
  addNewProductFromForm,
  selectedProduct,
  replaceEditedProduct,
}) => {
  // what do i want to expose as the public api of this function?
  // answer: all the stuff that muddies the water in my presentational component
  const [form, setForm] = useState(
    selectedProduct.id ? selectedProduct : { ...initialFormState }
  );

  useEffect(() => {
    console.log('product change identified! btn was clicked ...');

    if (selectedProduct.id) {
      setForm(selectedProduct);
    } else {
      setForm(initialFormState);
    }
  }, [selectedProduct]);

  const handleChange = (e) => {
    if (e.target.type === 'checkbox') {
      setForm({ ...form, [e.target.name]: e.target.checked });
      return;
    }

    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const buildFetchUrl = () => BASE_URL + (form.id ? `/${form.id}` : '');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // we need to know if we're making a PATCH or POST request
      const response = await fetch(buildFetchUrl(), {
        method: form.id ? 'PATCH' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const newOrEditedProduct = await response.json();

      // this allows us to selectively ADD a new product
      // or REPLACE an existing product in our products array
      // inherited from index.js
      if (form.id) {
        replaceEditedProduct(newOrEditedProduct);
      } else {
        addNewProductFromForm(newOrEditedProduct);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return { form, setForm, handleChange, handleSubmit };
};
