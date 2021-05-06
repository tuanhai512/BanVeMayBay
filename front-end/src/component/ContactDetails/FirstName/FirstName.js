import React, { Component } from 'react'

export class FirstName extends Component {
    constructor (props)
	{
		super(props)

		this.state ={
			FirstName:''
		}
	}
    handlefirstnamechange =(event) => {
		this.setState({
			FirstName: event.target.value
		})
	}
    render() {
        return (
                <div className="vdInputField vdInputFieldnamefirst">
					<label className="GmGpq">
						First Name (vd. Gia Duong)
						<span className="_1ylAf">*</span>
					</label>
					<div className="_1VnvT _3v6Dr">
						<div>
							<label className="aLzYS _2P9Gi _6LXde">
								<div className="_1YJhl">
									<div className="_315kk">
										<div className="_1h4cK">
											<div>
												<input className="_1nWNU" autocomplete="vd-input-field" data-id="vdInputFieldnamefirst" type="text" value={this.state.FirstName}
												onChange={this.handlefirstnamechange}/>
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

export default FirstName
