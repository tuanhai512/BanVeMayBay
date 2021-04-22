import React, { Component } from 'react'
import Day from './Day/Day.js'
import Month from './Month/Month.js'
import Year from './Year/Year.js'


export class DateOfBirth extends Component {
    render() {
        return (
            <div className="vdInputField vdDateFieldbirthDate djoq">
                <div className="GmGpq">
                    Date of Birth
                </div>
                <Day/>
                <Month/>
                <Year/>
            </div>
        )
    }
}

export default DateOfBirth
