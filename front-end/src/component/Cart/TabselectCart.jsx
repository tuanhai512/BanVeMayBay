import React, { Component } from "react";

class TabSelectCart extends Component {
  state = {
    chose: this.props.chose || 0, //Tabs được trỏ vào là tab đầu tiên
  };

  handleChange(index) {
    this.setState({ chose: index }); //Khi chọn vào tabs
  }

  render() {
    return (
      <div className="verticalcontainerC">
        <ul>
          {this.props.children.map((elem, index) => {
            let style = index === this.state.chose ? "chose" : "";
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

        <div className="tab-pay" /*Nội dung con của tab được hiển thị */>
          {this.props.children[this.state.chose]}
        </div>
      </div>
    );
  }
}

export default TabSelectCart;