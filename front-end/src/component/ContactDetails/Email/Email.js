import React, { Component } from 'react'

export class Email extends Component {
    constructor (props)
	{
		super(props)

		this.state ={
			emailAddress:''
		}
	}
    handleemailAddresschange =(event) => {
		this.setState({
			emailAddress: event.target.value
		})
	}
    render() {
        return (
                <div className="vdInputField vdInputFieldemailAddress djoq">
					<label className="GmGpq">
						Email
						<span className="_1ylAf">*</span>
					</label>
					<div className="_1VnvT _3v6Dr">
						<div>
							<label className="aLzYS _2P9Gi _6LXde">
								<div className="_1YJhl">
									<div className="_315kk">
										<div className="_1h4cK">
											<div>
												<input className="_1nWNU" autocomplete="vd-input-field" data-id="vdInputFieldemailAddress" type="text" value={this.state.emailAddress}
												onChange={this.handleemailAddresschange}/>
											</div>
										</div>
									</div>
								</div>
							</label>
						</div>
					</div>
					<div className="_2D3rM">
						e.g. email@example.com
					</div>
				</div>
        )
    }
}

export default Email
