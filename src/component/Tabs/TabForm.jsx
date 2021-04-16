import React, { Component } from "react";
import FirstTab from './FirstTab';
import Tabs from "./Tabs";
import Panel from "./Panel";

import "./Tab.css";
import SecondTab from "./SecondTab";

class TabForm extends Component {

  render() {  
    return (
      <div className="main-container"> 
        <Tabs className="Tabs" /*tab cha*/> 
          <Panel title="Ve may bay" className="Panel"/*tabs con*/>
          <div className="content" /*Hiển thị nội dung tabs con */>
            <FirstTab/>
          </div> 
          </Panel>
          <Panel title="Combo tiet kiem" className="Panel">
          <div className="content">
            <SecondTab/>
          </div> 
          </Panel>
        </Tabs>
      </div>
    );
  }
}

export default TabForm;