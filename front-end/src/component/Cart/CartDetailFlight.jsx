import React, { useState } from "react";
import "antd/dist/antd.css";
import { Modal, Tabs } from "antd";
import FlightDetails from "../ChiTietDetails/FlightDetails/FlightDetails.js"
import FareInfo from "../ChiTietDetails/FareInfo/FareInfo.js"
import Refund from "../ChiTietDetails/Refund/Refund.js"
import Reschedule from "../ChiTietDetails/Reschedule/Reschedule.js"

function CartDetailFlight() {

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
    <div className="">
      <div className="div-boxauto title"><h5>Hanoi → Ho Chi Minh City</h5></div>
      <a className="detailbutton" onClick={showModal}>
        Flight
      </a>
      <Modal width={750} title="Flight Details" visible={isModalVisible} footer={null} onCancel={handleCancel}>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Flight Details" key="1">
            <FlightDetails/>
          </TabPane>
          <TabPane tab="Fare Info" key="2">
            <FareInfo/>
          </TabPane>
        </Tabs>
      </Modal>
    </div>
  );
}

export default CartDetailFlight;
