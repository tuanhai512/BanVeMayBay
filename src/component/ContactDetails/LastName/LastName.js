import React, { Component } from 'react'

export class LastName extends Component {
    constructor (props)
	{
		super(props)

		this.state ={
			LastName: ''
		}
	}
    handlelastnamechange =(event) => {
		this.setState({
			LastName: event.target.value
		})
	}
    render() {
        return (
                <div className="vdInputField vdInputFieldnamelast">
					<label className="GmGpq">
						Last Name (e.g. Nguyen)
						<span className="_1ylAf">*</span>
					</label>
					<div className="_1VnvT _3v6Dr">
						<div>
							<label className="aLzYS _2P9Gi _6LXde">
								<div className="_1YJhl">
									<div className="_315kk">
										<div className="_1h4cK">
											<div>
												<input className="_1nWNU" autocomplete="vd-input-field" data-id="vdInputFieldnamelast" type="text" value={this.state.LastName}
												onChange={this.handlelastnamechange}/>
											</div>
										</div>
									</div>
								</div>
							</label>
						</div>
					</div>
					<div className="_2D3rM">
						As on ID Card/passport/driving license (without degree or special characters)
					</div>
				</div>
        )
    }
}

export default LastName
