import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

export class Button extends Component {
    render() {
        return (
            <div className="Booking-button-Continue">
               <Link to="/payment">
                <button className="Booking-button-SettingContinue" type="button">
                     Continue
                </button>
                </Link>
               
            </div>
        )
    }
}

export default Button
