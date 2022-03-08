import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Form, List } from './components';
import { BASE_URL } from './util';

export default function App() {
  const [products, setProducts] = useState([]);

  // this is a single product, and single products in our products array that's stored on state are objects
  const [selectedProduct, setSelectedProduct] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(BASE_URL);
        const products = await response.json();
        setProducts(products);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProducts();
  }, []);

  // binding functions that "wrap" other setters, like the one for useState
  // is a really good idea :)
  // this one handles POST requests
  const addNewProductFromForm = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  // to handle a PATCH, we need to target the previously-existing product in our products array, and we need to replace it (and whatever fields were modified) with the new data we receive as the param this function takes
  const replaceEditedProduct = (editedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === editedProduct.id ? editedProduct : product
    );
    setProducts(updatedProducts);
  };

  return (
    <main>
      <Form
        selectedProduct={selectedProduct}
        addNewProductFromForm={addNewProductFromForm}
        replaceEditedProduct={replaceEditedProduct}
        clearSelectedProduct={() => setSelectedProduct({})}
      />
      <List products={products} setSelectedProduct={setSelectedProduct} />
    </main>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
