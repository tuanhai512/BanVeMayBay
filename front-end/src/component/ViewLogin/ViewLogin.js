import React, { useState } from "react";
import "./viewlogin.css";
import "antd/dist/antd.css";
import { Modal } from "antd";
import Login from "../Login/Login.js";

function ViewLogin() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div>
      <div className="booking-main-box booking-viewlogin-CachDeu4Canh">
        <div>
          <div className="booking-viewlogin-HinhAnh">
            <img src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/web-ui/shared/images/LoginBenefits-296b03a171e13f7eb131dd83e7ee6c21.png"></img>
          </div>
          <div className="booking-viewlogin-FontCachDeu">
            Log in or register to enjoy this member-only benefit
          </div>
          <div className="booking-viewlogin-FontCachDeu">
            <span className="booking-viewlogin-ClFont">
              Book faster and easier with Passenger Quick Pick
            </span>
          </div>
          <div className="booking-viewlogin-link" onClick={showModal}>
            Log In or Register
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
  );
}

export default ViewLogin;
