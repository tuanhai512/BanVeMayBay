import React, { useState } from "react";
import "antd/dist/antd.css";
import { Modal, Tabs } from "antd";
import FlightDetails from "../ChiTietDetails/FlightDetails/FlightDetails.js"
import FareInfo from "../ChiTietDetails/FareInfo/FareInfo.js"
import Refund from "../ChiTietDetails/Refund/Refund.js"
import Reschedule from "../ChiTietDetails/Reschedule/Reschedule.js"

function CartDetailInfo() {

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
      <div className="div-boxauto titlesection title">Additional Information</div>
      <a className="detailbutton" onClick={showModal}>
        Details
      </a>
      <Modal width={750} title="Flight Details" visible={isModalVisible} footer={null} onCancel={handleCancel}>
        <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Refund" key="1">
            <Refund/>
          </TabPane>
          <TabPane tab="Reschedule" key="2">
            <Reschedule/>
          </TabPane>
        </Tabs>
      </Modal>
    </div>
  );
}

export default CartDetailInfo;
