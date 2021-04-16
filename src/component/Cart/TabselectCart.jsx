import React, { Component } from "react";

class TabselectCart extends Component {
  state = {
    choose: this.props.choose || 0 //Tabs được trỏ vào là tab đầu tiên
  };

  handleChange(index) {
    this.setState({ choose: index }); //Khi chọn vào tabs 
  }

  render() {
    return (
      <>
      <div>
          <div>
        <ul>
          {this.props.children.map((elem, index) => {
            let style = index === this.state.choose ? "choose" : "";
            return (
              <li
                key={index}
                className={style}
                 //xác định vị trí tabs trỏ vào và hiện nội dung tab đó              
                onClick={() => this.handleChange(index)}
              >
               
                {elem.props.title}
              </li>
            );
          })}
        </ul>
        
        <div className="tab-cart" /*Nội dung con của tab được hiển thị */>
          {this.props.children[this.state.choose]} 
          </div> 
          </div>
          </div>
      </>
    );
  }
}

export default TabselectCart;
