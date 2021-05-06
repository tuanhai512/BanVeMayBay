import React, { useState } from "react";
import DcPay from "./DcPay";
import Radiobank from "./Radiobank";

function Payment3() {
  const [choice, setChoice] = useState("");

  return (
    <div>
      <div className="containpay1">
        <div className="containdetail">
          <div className="div-autopay title"><h3>Tại cửa hàng</h3></div>
        </div>
        <div className="containdetail">
          <div className="containdetail">
            <div className="div-autopay title">Lưu ý trước khi thanh toán</div>
          </div>
          <div className="containdetail div-autopayinput cautionpay2">
            <ul>
              <li>
              - Thanh toán phải được thực hiện theo thời hạn quy định và trong khung giờ kinh doanh của cửa hàng.
              </li>
              <li>- Để tìm cửa hàng gần bạn nhất, vui lòng {" "}<a href="">xem tại đây.</a>  .</li>
              <li>- Bạn có thể tiến hành thanh toán tại một trong các cửa hàng sau:</li>
            </ul>
            <img src="https://ik.imagekit.io/tvlk/image/imageResource/2018/08/15/1534319429277-7db9dcfaae850bda5d0630499079c303.png?tr=q-75" className='img-pay3'/>
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
  );
}

export default Payment3;
