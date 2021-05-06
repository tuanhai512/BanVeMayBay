import React from "react";
import { Collapse } from "antd";
const { Panel } = Collapse;
function DcPay() {
  return (
    <div className="containdetail  ">
      <div className="div-autopay title ">
        <Collapse defaultActiveKey={["0"]} className=" div-autopayinput" ghost>
          <Panel header="Nhập mã giảm giá" key="1">
            <div className="containdetail">
              <div className="div-boxauto">
                <input type="text" />
              </div>
              <div>
                <a href="" className="detailbutton">
                  Ap dung
                </a>
              </div>
            </div>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
}
export default DcPay;
