import React, { Component } from 'react'

export class Nationality extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
    render() {
        return (
            <div className="vdInputField vdInputFieldnamefirst djoq">
                <div onSubmit={this.handleSubmit} className="GmGpq">
                    Nationality
                </div>
                <div className="_1VnvT _3v6Dr">
						<div>
							<label className="aLzYS _2P9Gi _6LXde">
								<div className="_1YJhl">
									<div className="_315kk">
										<div className="_1h4cK">
                                            <select value={this.state.value} onChange={this.handleChange} className="_1nWNU">
                                                <option value="VietNam">Vietnam</option>
                                                <option value="Afghanistan">Afghanistan</option>
                                                <option value="Aland Islands">Aland Islands</option>
                                                <option value="Albania">Albania</option>
                                            </select>
                                        </div>
								    </div>
							    </div>
						    </label>
					    </div>
				</div>
            </div>
        )
    }
}

export default Nationality
