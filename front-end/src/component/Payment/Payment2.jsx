import React, { useState } from "react";
import DcPay from "./DcPay";
import Radiobank from "./Radiobank";

function Payment2() {
  const [choice, setChoice] = useState("");

  return (
    <div className="containpay1">
      <div className="containdetail">
        <div className="containdetail">
          <div className="div-autopay title"><h3>Chuyển khoản ngân hàng</h3></div>
        </div>
        <div className="containdetail">
          <div className="div-autopayinput">
            <p>
              Bạn có thể chuyển tiền mặt tại quầy giao dịch hoặc chuyển khoản
              qua Internet Banking và trạm ATM.
            </p>
          </div>
        </div>
      </div>

      <div className="containdetail">
        <div className="containdetail">
          <div className="div-autopay title">Lưu ý trước khi thanh toán</div>
        </div>

        <div className="containdetail div-autopayinput cautionpay2">
          <ul>
            <li>
              - Hiện tại, chúng tôi <strong>không chấp nhận</strong> chuyển
              khoản liên ngân hàng qua ATM hoặc Internet Banking.
            </li>
            <li>- Phí chuyển khoản sẽ do người chuyển trả.</li>
          </ul>
        </div>
      </div>
      <div className="containdetail">
        <div className="containdetail">
          <div className="div-autopay title">Chọn ngân hàng</div>
        </div>
            <Radiobank/>
      </div>
      <hr />

     <DcPay/>
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
  );
}

export default Payment2;
