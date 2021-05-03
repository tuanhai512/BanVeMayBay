import React from "react";
import "./AAO.css";
import "antd/dist/antd.css";
import { Checkbox } from "antd";

function BaggageP() {
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  return (
    <div>
      <div className="AAO-form">
        <div className="AAO-Top-text">
          <label>
            <Checkbox onChange={onChange}></Checkbox>
          </label>
          <div className="AAO-text1">
            <div className="AAO-text">Chubb Baggage Protection</div>
            <div>
              <span className="AAO-textmoney">16.000 VND</span>
              <span className="AAO-pax">/pax</span>
            </div>
          </div>
        </div>
        <div className="AAO-info">
          <span>
            Get up to VND 20,000,000 coverage for missing or damaged baggage and
            personal effects, and up to VND 3,000,000 coverage for each missing
            or damaged belonging. By purchasing this insurance, you understand
            and agree to the Benefits, all Terms and Conditions and Declarations
            stipulated by Chubb Insurance Vietnam Company Limited.
          </span>
        </div>
        <div className="AAO-Top-text">
          <span className="AAO-info2">Info</span>
        </div>
      </div>
    </div>
  );
}

export default BaggageP;
