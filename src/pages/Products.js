import React from 'react';
import Header from '../component/Header/Header'
import Navbar from '../component/Navbar/Navbar'
import Product from '../component/Product/Product'

function Products() {
  return (
    <div className='products'>
      <Navbar/>
       <Header/>
       <Product/>
    </div>
  );
}

export default Products;
