import React from 'react'
import { Destination } from './Destination';



function FirstTabOneWay() {
    return (
        <div>
            <form className="select-form">
        <div className="top-form">
          <div className="div-Fdetail">
            <p>Điểm khởi hành</p>
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
          <div  className="div-Fdetail">
            <p>Ngày đi</p>
            <select className="select-area">
              {Destination.map((item, index) => {
                return <option key={index}>{item.title}</option>;
              })}
            </select>
          </div>
          <div  className="div-Fdetail">
            <div className="checkbox-area">
              <input type="checkbox" value="Khứ hồi" />
              <span>Khứ hồi</span>
            </div>
            <div className="select-area"></div>
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
        </div>
    )
}

export default FirstTabOneWay
