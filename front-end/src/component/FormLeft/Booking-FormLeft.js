import React, { Component } from 'react';
import './booking-formleft.css'
import ViewLogin from '../ViewLogin/ViewLogin.js'
import ContactDetails from '../ContactDetails/ContactDetails.js'
import TravelerDetails from '../TravelerDetails/TravelerDetails.js'
import Button from '../Button/Button.js'
import TravalP from '../AvailableAO/TravalP.js'
import BaggageP from '../AvailableAO/BaggageP.js'
import PriceDetails from '../PriceDetails/PriceDetails.js'

export class FormLeft extends Component {
    render() {
        return (
            <div className="form-left">
				<ViewLogin />
				<ContactDetails/>
				<TravelerDetails/>
                <TravalP/>
                <BaggageP/>	
                <PriceDetails/>
                <Button/>    
			</div>
        )
    }
}

export default FormLeft
