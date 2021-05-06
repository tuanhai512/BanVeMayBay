import React, { useState } from "react";
import "./FRTop.css";
import "antd/dist/antd.css";
import { Modal, Tabs } from "antd";
import FlightDetails from "../ChiTietDetails/FlightDetails/FlightDetails.js"
import FareInfo from "../ChiTietDetails/FareInfo/FareInfo.js"
import Refund from "../ChiTietDetails/Refund/Refund.js"
import Reschedule from "../ChiTietDetails/Reschedule/Reschedule.js"

function FRTop() {

  const [isModalVisible, setIsModalVisible] = useState(false);
  

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const { TabPane } = Tabs;

  function callback(key) {
    console.log(key);
  }
  return (
    <div className="FR-Top-TenChuyen">
      <h5>Hanoi → Ho Chi Minh City</h5>
      <span className="FR-Top-Details" onClick={showModal}>
        Details
      </span>
      <Modal width={750} title="Flight Details" visible={isModalVisible} footer={null} onCancel={handleCancel}>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Flight Details" key="1">
            <FlightDetails/>
          </TabPane>
          <TabPane tab="Fare Info" key="2">
            <FareInfo/>
          </TabPane>
          <TabPane tab="Refund" key="3">
            <Refund/>
          </TabPane>
          <TabPane tab="Reschedule" key="4">
            <Reschedule/>
          </TabPane>
        </Tabs>
      </Modal>
    </div>
  );
}

export default FRTop;
