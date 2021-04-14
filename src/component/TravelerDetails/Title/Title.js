import React, { Component } from 'react'

export class Title extends Component {
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
            <div className="vdSelectFieldtitle">
                <div onSubmit={this.handleSubmit} className="GmGpq">
                    Title
                </div>
                <div className="_1VnvT _3v6Dr">
						<div>
							<label className="aLzYS _2P9Gi _6LXde">
								<div className="_1YJhl">
									<div className="_315kk">
										<div className="_1h4cK">
                                            <select value={this.state.value} onChange={this.handleChange} className="_1nWNU">
                                                <option value="Mr.">Mr.</option>
                                                <option value="Mrs.">Mrs.</option>
                                                <option value="Ms.">Ms.</option>
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

export default Title
