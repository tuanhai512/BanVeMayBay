import React, { Component } from 'react'
import './booking-topview.css'

export class TopView extends Component {
    render() {
        return (
            <div>
                <h2 className="booking-topview-font-top">
                    Your Booking
                </h2>
				<div className="booking-topview-fontbot-CanhDeu">
					<span className="booking-topview-clfontbot">
                        Fill in your details and review your booking.
                    </span>
				</div>
            </div>
        )
    }
}

export default TopView
