import React, { useState } from "react";
import "./SecondTab.css";
import "./FirstTab.css";
import "./Destination";
import { Destination } from "./Destination";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

function SecondTab() {
  const [choice, setChoice] = useState("");

  const handleChange = (e) => {
    setChoice(e.target.value);
  };

  return (
    <div className="button-form-second">
      <form className="combo-form">
        <label>Đặt combo tiết kiệm lên đến 15%</label>
      </form>
      <form className="select-formS">
        <p>Chi tiết chuyến bay </p>
        <div className="top-form">
          <div className="div-Fdetail">
            <p>Điểm khởi hành</p>
            <select className="select-area">
              {Destination.map((item, index) => {
                return <option key={index}>{item.title}</option>;
              })}
            </select>
          </div>
          <div className="div-Fdetail">
            <p>Điểm đến</p>
            <select className="select-area">
              {Destination.map((item, index) => {
                return <option key={index}>{item.title}</option>;
              })}
            </select>
          </div>
          <div className="div-Fdetail">
            <p>Số hành khách</p>
            <select className="select-areaR">
              {Destination.map((item, index) => {
                return <option key={index}>{item.title}</option>;
              })}
            </select>
          </div>
        </div>
        <div className="bottom-form">
          <div  className="div-Fdetail">
            <p>Ngày đi</p>
            <select className="select-area">
              {Destination.map((item, index) => {
                return <option key={index}>{item.title}</option>;
              })}
            </select>
          </div>
          <div  className="div-Fdetail">
            <div className="checkbox-areaS">
              <input type="checkbox" value="Khứ hồi" />
              <span>Khứ hồi</span>
            <div className="select-areaM"></div>
            </div>
          </div>
          <div  className="div-Fdetail">
            <p>Hạng ghế</p>
            <select className="select-areaR">
            {Destination.map((item, index) => {
              return <option key={index}>{item.title}</option>;
            })}
          </select>
          </div>
        </div>
      </form>
      <form className="select-formM">
          <p>Chi tiết khách sạn</p>
        <div className="bottom-formS">
        <div className="div-Sdetail"> 
          <p>Điểm đến/Tên khách sạn</p>
          <select className="select-areaRM">
            {Destination.map((item, index) => {
              return <option key={index}>{item.title}</option>;
            })}
          </select>
          </div>
          <div className="div-Sdetail"> 
          <p>Nhận phòng</p>
          <select className="select-areaRMS">
            {Destination.map((item, index) => {
              return <option key={index}>{item.title}</option>;
            })}
          </select>
          </div>
          <div className="div-Sdetail"> 
          <p>Trả phòng</p>
          <select className="select-areaRMS">
            {Destination.map((item, index) => {
              return <option key={index}>{item.title}</option>;
            })}
          </select>
          </div>
          <div className="div-Sdetail">  
          <p>Hành khách</p>
          <select className="select-areaRMS">
            {Destination.map((item, index) => {
              return <option key={index}>{item.title}</option>;
            })}
          </select>
          </div>
          <div className="div-Sdetail"> 
          <p>Phòng</p>
          <select className="select-areaRMS">
            {Destination.map((item, index) => {
              return <option key={index}>{item.title}</option>;
            })}
          </select>
        </div>
        </div>
      </form>
      <form className="search-formS">
        <button className="search-button">
          <AiOutlineSearch />
          <Link to="/product">Tìm chuyến bay </Link>
        </button>
      </form>
    </div>
  );
}

export default SecondTab;
