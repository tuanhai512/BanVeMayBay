import React, { Component } from 'react'
import LastName from './LastName/LastName.js'
import FirstName from './FirstName/FirstName.js'
import Phone from './Phone/Phone.js'
import Email from './Email/Email.js'

export class ContactDetails extends Component {
    render() {
        return (
            <div>
                <h2 className="_2319d">Contact Details</h2>
				<div className="dkoq">
					<div className="ff093">
						<div className="_3HMVE">
							<h5 className="sad1d">Contact Details (for E-ticket/Voucher)</h5>
							<span className="_234w8">Fill In Details</span>
						</div>
						<hr className="_2si0n"></hr>
						<div className="_SDG75">
							<LastName/>
							<FirstName/>
							<Phone/>
							<Email/>
						</div>
					</div>
				</div>
            </div>
        )
    }
}

export default ContactDetails
