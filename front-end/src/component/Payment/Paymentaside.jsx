import React, { Component } from "react";
function Paymentaside() {
  return (
    <nav id="nav">
      <div class="div-containerArt backgroundnav">
        <div class="div-containerArt box-style">
          <div class="containdetail">
            <div class="div-boxauto">Mã đặt chỗ</div>
            <div className="containdetail">
              <div class="div-boxauto titlesection title">Code đặt chỗ</div>
            </div>
          </div>
          <div>
            <hr />
          </div>
          <div class="containdetail">
            <div class="div-boxauto">CHUYẾN ĐI</div>
            <div>
              <a href="" className="detailbutton">
                Chi tiết
              </a>
            </div>
          </div>
          <div class="containdetail">
            <div class="div-boxauto title">HAN-SGG</div>
            <div className="containdetail">
              <span>Date </span>
            </div>
          </div>

          <div class="containdetail">
            <div class="div-boxauto">Hà Nội (HAN) → TP HCM (SGN)</div>
          </div>
          <hr />
          <div class="containdetail">
            <div class="div-boxauto titlesection title">
              Danh sách hành khách
            </div>
          </div>
          <div class="containdetailP background">
            <div class="div-boxauto ">Tên người đặt</div>
            <div class="div-boxautoR">Người lớn</div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Paymentaside;
