import React from "react";
import "./AAO.css";
import "antd/dist/antd.css";
import { Checkbox } from "antd";

function TravalP() {
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  return (
    <div>
      <h2 className="AAO-text2">Available Add-on(s):</h2>
      <div className="AAO-form">
        <div className="AAO-Top-text">
          <label>
            <Checkbox onChange={onChange}></Checkbox>
          </label>
          <div className="AAO-text1">
            <div className="AAO-text">Chubb Travel Protection</div>
            <div>
              <span className="AAO-textmoney">45.000 VND</span>
              <span className="AAO-pax">/pax</span>
            </div>
          </div>
        </div>
        <div className="AAO-info">
          <span>
            Cover up to 210 million VND for Personal Accident, up to flight cost
            for Flight Cancellation, and up to 2.6 million VND for Flight and
            Baggage Delay. By purchasing this insurance, you agree to all the
            terms stipulated by Chubb.
          </span>
          <div>
            Insured Person's age must be between 6 weeks to 85 years old.
          </div>
          <div>
            <b>WARNING:</b>
            Policies purchased after 19th March 2020 will not provide any cover
            for claims directly or indirectly arising from, relating to or in
            any way connected with COVID-19 (or any mutation or variation
            thereof or any related strain).
          </div>
        </div>
        <div className="AAO-Top-text">
          <span className="AAO-info2">Info</span>
        </div>
      </div>
    </div>
  );
}

export default TravalP;
