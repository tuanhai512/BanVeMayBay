import React, { Component } from "react";
import Payment1 from "./Payment1";
import Paymentselecttab from "./Paymentselecttab";
import Panel from "../Tabs/Panel";
import Payment2 from "./Payment2";
import "./Payment.css";
import Payment3 from "./Payment3";
import Payment4 from "./Payment4";

class Paymentform extends Component {
  render() {
    return (
      <article>
        <Paymentselecttab className="Tabs" /*tab cha*/>
          <Panel title="Thẻ tín dụng" className="Panel" /*tabs con*/>
            <div className="content-pay" /*Hiển thị nội dung tabs con */>
              <Payment1 />
            </div>
          </Panel>
          <Panel title="Chuyển khoản ngân hàng" className="Panel">
            <div className="content-pay">
              <Payment2 />
            </div>
          </Panel>
          <Panel title="Tại cửa hàng" className="Panel">
            <div className="content-pay">
              <Payment3 />
            </div>
          </Panel>
          <Panel title="Thẻ ATM nội địa" className="Panel">
            <div className="content-pay">
              <Payment4 />
            </div>
          </Panel>
        </Paymentselecttab>
      </article>
    );
  }
}

export default Paymentform;
