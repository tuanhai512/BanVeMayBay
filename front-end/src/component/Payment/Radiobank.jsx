import React, { Component } from "react";
// class Radiobank extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "React",
//     };
//     this.onChangeValue = this.onChangeValue.bind(this);
//   }

//   onChangeValue(event) {
//     console.log(event.target.value);
//   }

//   render() {
//     return (
//       <div onChange={this.onChangeValue}>
//         <div className="cautionpay2auto">
//           <input type="radio" value="Vietcombank" name="Vietcombank" />
//           <span className="div-boxautoR">icon</span>
//         </div>
//         <div className="cautionpay2auto">
//           <input type="radio" value="Techcombank" name="Techcombank" />{" "}
//           <span className="div-boxautoR">icon</span>
//         </div>
//       </div>
//     );
//   }
// }
// export default Radiobank;
import { Radio, Input } from "antd";

class Radiobank extends React.Component {
  state = {
    value: 1,
  };

  onChange = (e) => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const radioStyle = {
      display: "block",
    };
    const { value } = this.state;
    return (
      <div className="containdetail">
        <Radio.Group onChange={this.onChange} value={value}>
          <div className="cautionpay2auto">
            <Radio style={radioStyle} value={1}>
              <span className="span-bank">
                {" "}
                Vietcombank{" "}
                <span>
                  <img
                    src="https://ub.com.vn/attachments/1562896980104-png.25372/"
                    className="img-icon-bank"
                  />
                </span>{" "}
              </span>
            </Radio>
          </div>
          <div className="cautionpay2auto">
            <Radio style={radioStyle} value={2}>
              <span className="span-bank">
                {" "}
                Techcombank{" "}
                <span>
                  <img
                    src="https://www.tanlocphat.net/wp-content/uploads/2019/11/Ngan-Hang-Techcombank_Tan-Loc-Phat.jpg"
                    className="img-icon-bank"
                  />
                </span>{" "}
              </span>
            </Radio>
          </div>
        </Radio.Group>
      </div>
    );
  }
}
export default Radiobank;
//ReactDOM.render(<Radiobank />, mountNode);
