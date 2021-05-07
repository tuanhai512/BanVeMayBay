import React from 'react';

import CartForm from"../component/Cart/CartForm";
import Header from '../component/Header/Header';
import Navbar from '../component/Navbar/Navbar';
import Paymentform from '../component/Payment/Paymentform';
function Cart() {
  return (
    <div className='cart'>  
    <Navbar/>
    <Header/>
        <CartForm/>
    </div>
    
  );
}

export default Cart;
