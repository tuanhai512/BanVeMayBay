import React from "react";
import { dataproducts } from "./dataproducts";
import "./Product.css";
import ProductItem from "./ProductItem";

function Product() {
 
  return (
    <div className="body">
      <div className="top"></div>
      <div className="top-product">
        <div className="top-content">
          <div className="top-left-product">
            <h3>Hà Nội (HAN) → TP HCM (SGN)</h3>
            <div className="detail-top">
              T3, 13 Th04 2021 | 1 passengers | Phổ thông
            </div>
          </div>


          <div className="button">
            <h4>Đổi tìm kiếm</h4>
          </div>
        </div>
      </div>
      <div className="header-product">
        <div className="header-item">Bộ lọc</div>
        <div className="header-item">
          <ul>
            <a> Điểm dừng</a>
            <a> Thời gian bay</a>
            <a> Hãng hàng không</a>
            <a> Thêm bộ lọc</a>
          </ul>
        </div>
        <div className="header-item"> Sắp xếp</div>
      </div>

      <div className="center-product">
        {dataproducts.map((item, index) => {
        

          return (
            <div key={index}>
              <ProductItem cName={item.cName} title={item.title} time_end={item.time_end} time_start={item.time_start}
                start={item.start} style={item.style} price={item.price} time={item.time} isOpen={item.isOpen}
              >
            </ProductItem>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Product;
