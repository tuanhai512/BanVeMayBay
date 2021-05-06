import React, { useState } from "react";
import DcPay from "./DcPay";
import Radiobank from "./Radiobank";

function Payment4() {
  const [choice, setChoice] = useState("");

  return (
    <div>
      {" "}
      <div>
        <div className="containpay1">
          <div className="containdetail">
            <div className="div-autopay title">
              <h3>Tại cửa hàng</h3>
            </div>
            <div className="div-boxautoR img-title">
             
              <img src="https://ik.imagekit.io/tvlk/image/imageResource/2017/03/20/1489981839102-323bf608171cfdf6e5ab2b6c9f1ecb78.png?tr=q-75" className="img-title-size" />
            </div>
          </div>
          <div className="containdetail">
            <div className="containdetail">
              <div className="div-autopay title">
                Lưu ý trước khi thanh toán
              </div>
            </div>
            <div className="containdetail div-autopayinput cautionpay2">
              <ul>
                <li>
                  - Thẻ thanh toán phải do ngân hàng nội địa phát hành và đã
                  được kích hoạt chức năng thanh toán trực tuyến
                </li>
                <li>
                  - Vui lòng xem hướng dẫn chi tiết <a href=""> tại đây . </a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <DcPay />
          <div>
            <div className="containdetail backgrounddetailprice">
              <div className="containdetail">
                <div>
                  <h4>Chi tiết giá</h4>
                </div>
              </div>
              <div className="containdetail">
                <div className="div-autopay">Hãng bay()</div>
                <div className="div-boxautoR">(Giá)</div>
              </div>
              <div className="containdetail">
                <div className="div-autopay">Tổng tiền</div>
                <div className="div-boxautoR">(Giá)</div>
              </div>
            </div>
            <div className="containdetail">
              <div>
                <p>
                  Bằng việc nhấn Thanh toán, bạn đồng ý{" "}
                  <a href="">Điều khoản - điều kiện</a> và{" "}
                  <a href="">Chính sách quyền riêng tư </a>
                </p>
              </div>
              <div>
                <button className=" btn-pay-icon ">
                  Thanh toán Chuyển khoản ngân hàng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment4;
