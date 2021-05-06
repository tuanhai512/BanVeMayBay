import React, { useState } from "react";
import "antd/dist/antd.css";
import "./PriceDetails.css";
import { Collapse ,Modal  } from "antd";
import Login from '../Login/Login.js'

function PriceDetails() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  
  const { Panel } = Collapse;
  return (
    <div>
      <h2 className="_2319d">Price Details</h2>
      <div className="dkoq">
        <div className="ff093">
          <div>
            <Collapse accordion>
              <Panel header="Price you pay" key="1">
                <div className="PD-text">
                  <p>Vietravel Airlines (Adult) x1</p>
                  <p>VND 850.000 </p>
                </div>
              </Panel>
            </Collapse>
          </div>
          <div className="PD-form">
            <div className="PD-text2">
              Log In or Register now to earn Points! No worries, your booking
              will be saved.
            </div>
            <div className="PD-login" onClick={showModal}>
              Log in
            </div>
            <Modal
            width={400}
            title="Log in to your account"
            visible={isModalVisible}
            footer={null}
            onCancel={handleCancel}
          >
            <Login />
          </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceDetails;
