import React, { useState } from "react";
import { Collapse } from "react-collapse";
import ItemChild from "./ProductItemChild";

export default function ProductItem({cName, start, title, time_start, time_end, end, style, price, time}) {
 
 const [isOpen, setIsOpen] = useState(false)
 
 const onClick = () => {
   setIsOpen(!isOpen)
 }
 
  return (
    <div onClick ={onClick} >
      <div className="card-flight">
        <div className="collapsible">
          <div>
            <div className="flight-content-left">
              <div className={cName}>
                <a>{title}</a>
              </div>
              <div className="{cName} item2">
                <a>{time_start}</a>
                <br />
                <a>{start}</a>
              </div>
              <div className="{cName} item2">
                <a>{time_end} </a>
                <br />
                {end}
              </div>
              <div className={cName}>
                <a>{time}</a>
                <br />
                <a>{style}</a>
              </div>
            </div>
            <div className="flight-content-bottom">
              <a>Chi tiết chuyến bay </a>

              <a>Chi tiết vé </a>
            </div>
          </div>
          <div className="flight-content-right">
            <div className={cName}>
              <a>{price}</a>
              <br />
              <div className="button-card">
                <a>Chọn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Collapse isOpened={isOpen}>
        <ItemChild start={start} isOpen></ItemChild>
      </Collapse>
    </div>
  )
}
