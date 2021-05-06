import React, { Component } from 'react'

export class Month extends Component {
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
            <div className=" vdInputField vdDateFieldbirthDate iqhwo _1VnvT _3v6Dr">
				<div>
					<label className="aLzYS _2P9Gi _6LXde">
						<div className="_1YJhl">
							<div className="_315kk">
								<div className="_1h4cK">
                                    <select value={this.state.value} onChange={this.handleChange} className="_1nWNU">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                    </select>
                                </div>
							</div>
						</div>
					</label>
				</div>
			</div>
        )
    }
}

export default Month
