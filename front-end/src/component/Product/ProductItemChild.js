import React from "react";

export default function ItemChild({
  cName,
  start,
  title,
  time_start,
  time_end,
  end,
  style,
  price,
  time,
}) {
  return (
    <div className="content1">
      <div className="item-content">
        <div className="item-content-children">{time_start}</div>
        <div className="item-content-children">{start}</div>
      </div>
      <div className="item-content">
        <div className="item-content-children">{time}</div>
        <div className="item-content-children">{title}</div>
      </div>
      <div className="item-content">
        <div className="item-content-children" >{time_end}</div>
        <div className="item-content-children">{end}</div>
      </div>
    </div>
  );
}
