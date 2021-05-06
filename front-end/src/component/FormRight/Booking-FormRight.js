import React, { Component } from "react";
import "./booking-formright.css";
import FRBot from "../FR-Bot/FRBot.js"
import FRTop from "../FR-Top/FRTop.js"

export class FormRight extends Component {
  render() {
    return (
      <div className="form-right">
        <div className="booking-main-box">
          <FRTop/>
          <hr className="_2si0n"></hr>
          <FRBot/>
          <div className="_3VDAS">
            <span className="_1KrnW _1EnnQ Edww1 _22csp _2nFkQ">
              <span>Non-refundable</span>
            </span>
            <span className="_1KrnW _1EnnQ KVDS _22csp _2nFkQ">
              <span>Reschedule Available</span>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default FormRight;
