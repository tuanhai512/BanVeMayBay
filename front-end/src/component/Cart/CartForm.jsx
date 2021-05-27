import React, { Component } from "react";
import FRTop from "../FR-Top/FRTop";
import "./Cart.css";
import CartDetailFlight from "./CartDetailFlight";
import TabCartForm from "./TabCartForm";
import CartDetailInfo from "./CartDetailInfo";
import { Link } from "react-router-dom";


class CartForm extends Component {
  
  render() {
   
    return (
      <div>
        <div className="bangmauxanh"></div>
        <div className="box-container">
          <div className="div-containertitle box-style clear-fix">
            <div className="div-container clear-fix">
              <div className="title">
                <h2>Flight form HANOI to HCM</h2>
              </div>
              <div>
                {" "}
                <button className="detailbutton">icon</button>
              </div>

              <div className=" boxinherit">
                <div className="div-boxauto boxinherittitle">
                  <img
                    src="https://flytrip.vn/wp-content/uploads/2016/05/icon-may-bay.png"
                    className="icon"
                  />
                </div>
                <div className="div-boxauto boxinherittitle">
                  <ul>
                    <li>
                      {" "}
                      <div className="div-boxauto ">
                        Hà Nội (HAN) → TP HCM (SGN) | Date
                      </div>
                    </li>
                    <li>
                      <div className="div-boxauto ">1 người lớn | Economy</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="titlesection">
            <article>
              <div>
                <div class="div-containerArtP box-styleP">
                  <div class="containdetail">
                    <div class="div-boxauto">
                      <img
                        src="https://flytrip.vn/wp-content/uploads/2016/05/icon-may-bay.png"
                        className="icon"
                      />
                    </div>
                   <CartDetailFlight/>
                  </div>
                  <div>
                    <div class="containdetail">
                      <div>
                        <hr />
                      </div>
                      <div class="div-boxauto title">Date</div>
                    </div>
                    <div class="containdetail">
                      <div class="div-boxauto">
                        <img
                          src="https://flytrip.vn/wp-content/uploads/2016/05/icon-may-bay.png"
                          className="icon"
                        />
                      </div>
                      <div class="div-boxart">Hang bay</div>
                    </div>
                    <div>
                      <div class="containdetail">
                        <div class="div-boxart">
                          <div>
                            <span>22:22</span>
                          </div>
                          <div>
                            <span>Hà Nội (HAN)</span>
                          </div>
                        </div>
                        <div class="div-boxautoicon">→</div>
                        <div class="div-boxart">
                          <div>
                            <span>00:30</span>
                          </div>
                          <div>
                            <span>TP HCM(SGN)</span>
                          </div>
                        </div>
                        <div class="div-boxart">
                          <div>
                            <span>2h15</span>
                          </div>
                          <div>
                            <span className="circleicon"></span>
                            <span>Bay thang</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="containdetailP background">
                <div>
                  <h2>Nang tam trai nghiem</h2>
                  <div class="tab-cart">
                    <TabCartForm />
                  </div>
                </div>
              </div>
            </article>
            <nav id="nav">
              <div class="div-containerArt backgroundnav">
                <div class="div-containerArt box-style">
                  <div class="containdetail">
                    <div class="div-boxauto">(icon)</div>
                    <CartDetailInfo/>
                  </div>
                  <div>
                    <hr />
                  </div>
                  <div class="containdetail">
                    <div class="div-boxauto title">HAN-SGG</div>
                  </div>
                  <div class="containdetail">
                    <div class="div-boxauto">message</div>
                  </div>
                  <div class="containdetail">
                    <div class="div-boxauto">message</div>
                  </div>
                </div>
                <div class="div-containerArt box-style">
                  <div class="containdetail">
                    <div class="div-boxauto titlesection title">
                      Price Details
                    </div>
                  </div>
                  <br />
                  <div class="containdetail">
                    <div class="div-boxauto">Hang bay</div>
                    <div class="div-boxautoR">
                      VND<span>700.000</span>
                    </div>
                  </div>
                  <div class="containdetailP background">
                    <div class="div-boxauto ">Tien phai tra</div>
                    <div class="div-boxautoR">
                      VND<span>700.000</span>
                    </div>
                  </div>
                </div>
                <div class="containdetailbtn">
                <Link to="/booking">
                  <button class="div-boxbtn box-style">      
                    Continue to Booking               
                  </button>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
export default CartForm;
