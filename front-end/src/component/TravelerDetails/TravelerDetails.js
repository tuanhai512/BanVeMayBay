import React, { Component } from 'react'
import Title from './Title/Title.js'
import FirstName from './FirstName/FirstName.js'
import LastName from './LastName/LastName.js'
import Nationality from './Nationality/Nationality.js'
import DateOfBirth from './DateOfBirth/DateOfBirth.js'

export class TravelerDetails extends Component {
    render() {
        return (
            <div>
                <h2 className="_2319d">Traveler Details</h2>
				<div className="dkoq">
					<div className="ff093">
						<div className="_3HMVE">
							<h5 className="sad1d">Adult 1</h5>
							<span className="_234w8">Fill In Details</span>
						</div>
						<hr className="_2si0n"></hr>
						<div className="_SDG75 ">
                            <p className="qwej2">Name as on ID card/passport (without tonal marks)</p>
							<Title/>
							<LastName/>	
							<FirstName/>
							<DateOfBirth/>
							<Nationality/>
						</div>
					</div>
				</div>
			</div>
        )
    }
}

export default TravelerDetails
