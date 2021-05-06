import React, { Component } from 'react'
import './button.css'

export class Button extends Component {
    render() {
        return (
            <div className="Booking-button-Continue">
                <button className="Booking-button-SettingContinue" type="button">
                    Continue
                </button>
            </div>
        )
    }
}

export default Button
