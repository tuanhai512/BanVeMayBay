import React from 'react';
import { BsTypeH2 } from 'react-icons/bs';
import Paymentaside from '../component/Payment/Paymentaside';
import Paymentform from '../component/Payment/Paymentform';
import Stepbar from '../component/Payment/Stepbar';

function Payment() {
  return (
    
    <div className='paymentform'>
      
      <Paymentform/>
      <Paymentaside/>
    </div>
    
  );
}

export default Payment;
