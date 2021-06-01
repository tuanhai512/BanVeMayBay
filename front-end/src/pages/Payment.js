import React from 'react';
import { BsTypeH2 } from 'react-icons/bs';
import FormRight from '../component/FormRight/Booking-FormRight';
import Paymentaside from '../component/Payment/Paymentaside';
import Paymentform from '../component/Payment/Paymentform';
import Stepbar from '../component/Payment/Stepbar';

function Payment() {
  return (  
    <div className='payment'> 
      <Paymentform/>
      {/* <Paymentaside/> */}
      <FormRight/>
    </div>
    
  );
}

export default Payment;
