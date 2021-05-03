import React, { Component } from 'react'
import './booking-header.css'


export class Header extends Component {
    render() {
        return (
            <div>
                <div className="booking-header">
                <header className="booking-header-CanhDeu2Ben">
                    <a>LOGO</a>
                    <ul className="booking-header-MucPhai">
                        <li className="booking-header-SetMucPhai">                 
                            <div className="bookcl">Book</div>
                        </li>
                        <li className="booking-header-SetMucPhai">
                            <div className="graycl">Pay</div>
                        </li>
                        <li className="booking-header-SetMucPhai">
                            <div className="graycl">Process</div>
                        </li>
                        <li className="booking-header-SetMucPhai">
                            <div className="graycl">E-ticket</div>
                        </li>
                    </ul>
                </header>
        </div>
            </div>
        )
    }
}

export default Header
