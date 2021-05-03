import React, { Component } from "react";
import Tabcart1 from "./Tabcart1";
import Tabcart2 from "./Tabcart2";
import TabSelectCart from "./tabSelectCart";
import "./Cart.css";
import "../Tabs/Tabs";
import Panel from "../Tabs/Panel";

class tabCartForm extends Component {
  render() {
    return (
      <div className="main-container">
        <TabSelectCart className="tab-cart" /*tab cha*/>
          <Panel title="Eco" className="Panel" /*tabs con*/>
            <div className="content-cart" /*Hiển thị nội dung tabs con */>
              <Tabcart1 />
            </div>
          </Panel>
          <Panel title="SkyBoss" className="Panel">
            <div className="content-cart">
              <Tabcart2 />
            </div>
          </Panel>
        </TabSelectCart>
      </div>
    );
  }
}

export default tabCartForm;