import React from 'react'
import { Destination } from './Destination';
import './FirstTab.css';

function FirstTabMuti() {
    return (
        <div>
             <form className="select-form">
        <div className="top-form">
          <div className="div-Fdetail">
            <p>Điểm khởi hành </p>
            <select className="select-area">
              {Destination.map((item, index) => {
                return <option key={index}>{item.title}</option>;
              })}
            </select>
          </div>
          <div  className="div-Fdetail">
            <p>Điểm đến</p>
            <select className="select-area">
              {Destination.map((item, index) => {
                return <option key={index}>{item.title}</option>;
              })}
            </select>
          </div>
          <div  className="div-Fdetail">
            <p>Số hành khách</p>
            <select className="select-areaR">
              {Destination.map((item, index) => {
                return <option key={index}>{item.title}</option>;
              })}
            </select>
          </div>
        </div>
        <div className="bottom-form">
          <div  className="div-FdetailL">
            <p>Số hành khách</p>
            <select className="select-areaR">
              {Destination.map((item, index) => {
                return <option key={index}>{item.title}</option>;
              })}
            </select>
          </div>
          <div  className="div-FdetailL">
            <p>Hạng ghế</p>
            <select className="select-areaR">
              {Destination.map((item, index) => {
                return <option key={index}>{item.title}</option>;
              })}
            </select>
          </div>
        </div>
      </form>
        </div>
    )
}

export default FirstTabMuti
