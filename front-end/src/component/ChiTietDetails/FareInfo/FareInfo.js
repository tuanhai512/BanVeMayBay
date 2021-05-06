import React from "react";
import "./fareinfo.css";

function FareInfo() {
  return (
    <div className="FI-main">
      <div className="FI-text">Conditions</div>
      <div>
        <div className="FI-text1">Vietnam Airlines</div>
        <div>
          <div className="FI-khoangcach">
            <div className="FI-text2">Hanoi → Ho Chi Minh City</div>
            <div className="FI-text3">Economy</div>
          </div>
          <div>
            <div className="FI-text4">Refundable</div>
            <div className="FI-text5">Reschedule Not Available</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FareInfo;
