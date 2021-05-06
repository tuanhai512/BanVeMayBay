import React, { useState } from "react";
import "./flightdetails.css";
import "antd/dist/antd.css";
import { Timeline } from "antd";

function FlightDetails() {
  const [mode] = useState("left");

  return (
    <div>
      <Timeline
        mode={mode}
        style={{
          marginTop: 30,
          marginRight: 575,
        }}
      >
        <Timeline.Item label="22:15 01 May">
          <div className="FD-text">Hanoi (HAN)</div>
          <div className="FD-text2">Noibai International Airport</div>
          <div className="FD-vien">
            <div className="FD-mid-Top">
              <div className="FD-mid-Top-font">Vietnam Airlines VN-6023</div>
              <div className="FD-mid-Top-font2">Operated by Pacific</div>
              <div className="FD-mid-Top-font2">Promo</div>
            </div>
            <div className="FD-mid-bot">
              <div className="FD-mid-botL">
                <div>Baggage 0 kg</div>
                <div>Cabin baggage 7 kg</div>
              </div>
              <div className="FD-mid-botR">
                <div>AircraftAirbus A320</div>
                <div>Seat layout3-3</div>
                <div>Seat pitch29 inches (standard)</div>
              </div>
            </div>
          </div>
        </Timeline.Item>
        <Timeline.Item label="00:15 02 May">
          <div className="FD-text">Ho Chi Minh City (SGN)</div>
          <div className="FD-text2">Tansonnhat Intl</div>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}

export default FlightDetails;
