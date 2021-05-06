import React, { Component } from "react";

class Tabs extends Component {
  state = {
    selected: this.props.selected || 0 //Tabs được trỏ vào là tab đầu tiên
  };

  handleChange(index) {
    this.setState({ selected: index }); //Khi chọn vào tabs 
  }

  render() {
    return (
      <>
        <ul>
          {this.props.children.map((elem, index) => {
            let style = index === this.state.selected ? "selected" : "";
            return (
              <li
                key={index}
                className={style}
                 //xác định vị trí tabs trỏ vào và hiện nội dung tab đó              
                onClick={() => this.handleChange(index)}
              >
                {elem.props.icon}
                {elem.props.title}
              </li>
            );
          })}
        </ul>
        
        <div className="tab" /*Nội dung con của tab được hiển thị */>
          {this.props.children[this.state.selected]} 
          </div> 
      </>
    );
  }
}

export default Tabs;
