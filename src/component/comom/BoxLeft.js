import React, { Component } from 'react'
import ViewLogin from './ViewLogin/ViewLogin.js'
import ContactDetails from './ContactDetails/ContactDetails.js'
import TravelerDetails from './TravelerDetails/TravelerDetails.js'
import Button from './Button/Button.js'

export class BoxLeft extends Component {
    render() {
        return (
            <div>
                <div className="box-left">
					<ViewLogin />
					<ContactDetails/>
					<TravelerDetails/>	
                    <Button/>    
				</div>
            </div>
        )
    }
}

export default BoxLeft
