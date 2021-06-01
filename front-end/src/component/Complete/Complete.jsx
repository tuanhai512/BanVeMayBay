import React, { Component } from 'react';
import FormRight from '../FormRight/Booking-FormRight';
import '../Payment/Payment.css';
import CompletDetails from './CompletDetails';

class Complete extends Component {
    render (){
    return(
      <div>
        <CompletDetails/>
      <FormRight/>
      </div>
      )
    }
  }


export default Complete;
