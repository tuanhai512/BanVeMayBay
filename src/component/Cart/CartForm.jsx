import React, { Component } from "react";   
import TabForm from '../Tabs/TabForm';
import tabCartform from './tabCartform';
import "./Cart.css";



class CartForm extends Component {
    render() {
    return (
    <div className="box-container">
        <div className="div-containertitle box-style clear-fix">
            <div className="div-container clear-fix"><h2>Flight form HANOI to HCM</h2>
               <div> <button className="detailbutton">icon</button></div>
              
                <div className="div-container boxinherit">
                    <div className="div-boxauto boxinherittitle" >
                    <img src="https://flytrip.vn/wp-content/uploads/2016/05/icon-may-bay.png" className="icon"/>
                    </div>
                    <div className="div-boxauto boxinherittitle">
                        <div className="div-boxauto  ">Hà Nội (HAN) →  TP HCM (SGN) | Date</div>
                        <div className="div-boxauto ">1 người lớn | Economy</div>
                    </div>
                </div>
            </div>
        </div>
        <div className="titlesection">
            <article>
                <div>
                    <div class="div-containerArtP box-styleP">
                        <div class="containdetail">
                            <div class="div-boxauto"><img src="https://flytrip.vn/wp-content/uploads/2016/05/icon-may-bay.png" className="icon"/></div>
                            <div class="div-boxauto">Hà Nội (HAN) → TP HCM (SGN) | Date</div>
                            <a href="#" class="detailbutton">Flight</a>
                        </div>
                        <div>
                            <div class="containdetail">
                                <div>
                                    <hr />
                                </div>
                                <div class="div-boxauto">Date</div>
                            </div>
                            <div class="containdetail">
                                <div class="div-boxauto"><img src="https://flytrip.vn/wp-content/uploads/2016/05/icon-may-bay.png" className="icon"/></div>
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
                                    <div class="div-boxautoicon">
                                        →
                                    </div>
                                    <div class="div-boxart">
                                        <div>
                                            <span>00:30</span>
                                        </div>
                                        <div>
                                            <span>Ho Chi Minh(SGN)</span>
                                        </div>
                                    </div>
                                    <div class="div-boxart">
                                        <div>
                                            <span>Tong gio bay</span>
                                        </div>
                                        <div>
                                            <span>(icon)</span>
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
                                <tabCartform/>
                            </div>
                        </div>
                    </div>
            </article>
            <nav id="nav">
                <div class="div-containerArt backgroundnav">
                    <div class="div-containerArt box-style">
                        <div class="containdetail">
                            <div class="div-boxauto">(icon)</div>
                            <div class="div-boxauto titlesection">Additional Information</div>
                            <div>
                                <a href="#" class="detailbutton">
                                    Detail</a>
                            </div>
                        </div>
                        <div>
                            <hr />
                        </div>
                        <div class="containdetail">
                            <div class="div-boxauto">HAN-SGG</div>
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
                            <div class="div-boxauto titlesection">Price Details</div>
                        </div>
                        <br />
                        <div class="containdetail">
                            <div class="div-boxauto">Hang bay</div>
                            <div class="div-boxautoR">VND<span>700.000</span></div>
                        </div>
                        <div class="containdetailP background">
                            <div class="div-boxauto ">Tien phai tra</div>
                            <div class="div-boxautoR">VND<span>700.000</span></div>
                        </div>
                    </div>
                    <div class="containdetail">
                    <button class="div-boxbtn box-style">Continue to Booking</button>
                    </div>
                    
                </div>
            </nav>
        </div>
    </div>
    );
}}
    export default CartForm