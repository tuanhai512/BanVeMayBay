import React, { Component } from 'react'
import './booking-body.css'
import FormLeft from '../../FormLeft/Booking-FormLeft.js'
import FormRight from '../../FormRight/Booking-FormRight.js'
import TopView from '../../TopView/Booking-TopView.js'

export class Body extends Component {
    render() {
        return (
            <div className="booking-body">
                <div className="booking-body-CanhDeu2Ben">
                    <div className="booking-body-CanhDeuTrenDuoi">
                        <TopView />
                        <FormLeft />
                        <FormRight/>
                    </div>
                </div>   
            </div>
        )
    }
}

export default Body
