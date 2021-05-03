import React, { Component } from "react";
import "./Login.css";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Login: "",
    };
    this.state = {
      Pass: "",
    };
  }
  handleloginchange = (event) => {
    this.setState({
      Login: event.target.value,
    });
  };
  handlepasschange = (event) => {
    this.setState({
      Pass: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <label className="Login-font">Email</label>
        <div className="Login-form">
          <input
            className="Login-form1"
            type="text"
            value={this.state.Login}
            onChange={this.handleloginchange}
          />
        </div>
        <label className="Login-font">
            <span>Pass</span>
            <a className="Login-font3" href="#">Forgot Password?</a>
            </label>
        <div className="Login-form">
          <input
            className="Login-form1"
            type="text"
            value={this.state.Pass}
            onChange={this.handlepasschange}
          />
        </div>
        <div className="Login-button-login">Log In</div>
        <div className="Login-font2">
          <span>No account yet?</span>
          <a href="#"> Register </a>
        </div>
      </div>
    );
  }
}

export default Login;
