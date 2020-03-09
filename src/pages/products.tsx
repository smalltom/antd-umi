import { connect } from 'umi';
import ProductList from '@/components/ProductList';
import React from 'react';


const Products = ({ dispatch, products }) => {
  function handleDelete(id: string) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  function handleCopy(id: string) {
    dispatch({
      type: 'products/copy',
      payload: id,
    });
  }
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} onCopy={handleCopy} products={products} />
    </div>
  );
};

export default connect(({ products }) => ({
  products,
}))(Products);