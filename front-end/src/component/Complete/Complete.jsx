import React from 'react'
import DcPay from "../Payment/DcPay";
import '../Payment/Payment.css';

function Complete() {
    return (
        <div className="containpay1">
          <div className="containdetail">
            <div className="div-autopay title">
              <h3>Thẻ tín dụng</h3>{" "}
            </div>
            <div className="div-boxautoR img-title">
              <img
                src="https://ik.imagekit.io/tvlk/image/imageResource/2017/01/17/1484655630637-0dcca3761eb5910f1835f438f153bfae.png?tr=q-75"
                className="img-title-sizeW"
              />
    
              <img
                src="https://ik.imagekit.io/tvlk/image/imageResource/2017/01/06/1483707776912-1abb188266f6d5b3f2e27f4733ca32e9.png?tr=q-75"
                className="img-title-size"
              />
    
              <img
                src="https://ik.imagekit.io/tvlk/image/imageResource/2017/01/06/1483707787206-abc175b224ab92a6967e24bc17c30f45.png?tr=q-75"
                className="img-title-size"
              />
              <img
                src="https://ik.imagekit.io/tvlk/image/imageResource/2017/07/10/1499673365437-1e1522e5cc323e7e8a7b57b90e81dbc9.png?tr=q-75"
                className="img-title-size"
              />
            </div>
          </div>
          <div className="containdetail">
            <div className="containdetail">
              <div className="div-autopay title">Số thẻ tín dụng </div>
            </div>
            <div className="containdetail">
              <div className="div-autopayinput">
                <input type="text" placeholder="16 chữ số trên thẻ tín dụng" />
              </div>
            </div>
          </div>
          <div className="containdetail">
            <div className="containdetailCCV">
              <div className="div-autopay title">Hiệu lực đến</div>
              <div className="div-autopay title">CVV</div>
            </div>
            <div className="containdetailCCV">
              <div className="div-autopay">
                <input type="text" placeholder="MM/YY" />
              </div>
              <div className="div-autopay">
                <input type="text" placeholder="3 số CVV" />
              </div>
            </div>
          </div>
          <div className="containdetail">
            <div className="containdetail">
              <div className="div-autopay title">Tên trên thẻ</div>
            </div>
            <div className="containdetail">
              <div className="div-autopayinput">
                <input type="text" placeholder="Tên trên thẻ" />
              </div>
            </div>
          </div>
          <hr />
          <div className="containdetail">
            <div className="containdetail">
              <div className="div-autopay title">Chọn trả góp</div>
            </div>
            <div className="containdetail">
              <div className="div-autopay">
                <a href="">Learn more</a>
              </div>
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
                  <span>
                    <img
                      src="https://ik.imagekit.io/tvlk/image/imageResource/2017/01/17/1484666312891-e732ae873c384e84346bcccb8bb3eb1c.png?tr=q-75"
                      className="img-pay-icon"
                    />
                  </span>
                  Thanh toán thẻ tín dụng
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }


export default Complete
