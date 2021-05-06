import React, { Component } from 'react'

export class Phone extends Component {
    constructor (props)
	{
		super(props)

		this.state ={
			phoneNumber:''
		}
	}
    handlephoneNumberchange =(event) => {
		this.setState({
			phoneNumber: event.target.value
		})
	}
    render() {
        return (
                <div className="vdInputField vdPhoneNumberFieldphoneNumber djoq">
					<label className="GmGpq">
						Mobile Number
						<span className="_1ylAf">*</span>
					</label>
					<div className="_1VnvT _3v6Dr">
						<div>
							<label className="aLzYS _2P9Gi _6LXde">
								<div className="_1YJhl">
									<div className="_315kk">
										<div className="_1h4cK">
											<div>
												<input className="_1nWNU" autocomplete="vd-input-field" data-id="vdPhoneNumberFieldphoneNumber" type="text" value={this.state.phoneNumber}
												onChange={this.handlephoneNumberchange}/>
											</div>
										</div>
									</div>
								</div>
							</label>
						</div>
					</div>
					<div className="_2D3rM">
                    e.g. +62812345678, for Country Code (+62) and Mobile No. 0812345678
					</div>
				</div>
        )
    }
}

export default Phone
