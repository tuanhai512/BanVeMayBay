import React, { Component } from "react";
import FirstTab from './FirstTab';
import Tabs from "./Tabs";
import Panel from "./Panel";

import "./Tab.css";
import SecondTab from "./SecondTab";

class TabForm extends Component {

  render() {  
    return (
      <div className="main">
      <div className="main-container"> 
        <Tabs className="Tabs" /*tab cha*/> 
        <Panel icon={<div><i class="fas fa-plane"></i></div>} title="Flight " className="Panel"/*tabs con*/>
        <div className="content" /*Hiển thị nội dung tabs con */>
            <FirstTab/>
          </div> 
          </Panel>
          
          <Panel title="Flight + Hotel" className="Panel">
            
          <div className="content">
            <SecondTab/>
          </div> 
          </Panel>
        </Tabs>
      </div>
      </div>
    );
  }
}

export default TabForm;