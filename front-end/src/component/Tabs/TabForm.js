import React, { Component } from "react";
import RadioButton from './RadioButton';
import Tabs from "./Tabs";
import Panel from "./Panel";

import "./Tab.css";

class TabForm extends Component {

  render() {  
    return (
      <div className="main-container"> 
        <Tabs className="Tabs" /*tab cha*/ > 
          <Panel title="All Names" className="Panel"/*tabs con*/>
          <div className="content" /*Hiển thị nội dung tabs con */>
            <RadioButton/>
          </div> 
          </Panel>
          <Panel title="In Review Candidates" className="Panel">
          <div className="content"><a>abcd</a></div> 
          </Panel>
        </Tabs>
      </div>
    );
  }
}

export default TabForm;