import React, { useState } from "react";
import "antd/dist/antd.css";
import { Timeline } from "antd";

export default function ItemChild({
  cName,
  start,
  title,
  time_start,
  time_end,
  destination,
  style,
  price,
  time,
}) {
  const [mode] = useState("left");
  return (
    <div className="content1">
      <Timeline
        mode={mode}
        style={{
          marginTop: 30,
          marginRight: 575,
        }}
      >
        <Timeline.Item label="22:15 01 May">
          <div className="FD-text">{start}</div> giống như this.name á
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
          <div className="FD-text">{destination}</div>
          <div className="FD-text2">Tansonnhat Intl</div>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}
