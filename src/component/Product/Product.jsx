import React,{useState,useEffect} from 'react';
import './Product.css';
import {dataproducts} from './dataproducts'


export default function Product() {
   // const [products,setProducts] = useState([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
   /* useEffect( async () => {

       const productsFromServer = await getAllProducts();
       setProducts(productsFromServer);
      
    }, []);

    async function getAllProducts (){
        const productsFromServer = await axios.get(
            'http://localhost:3001/products'
        );
        return productsFromServer.data;
    }
    */
   
    return (
        <div className="body">
            <div className="top"></div>
            <div className="top-product">
                <div className="top-content">
                    <div className="top-left-product">
                        <h3>
                        Hà Nội (HAN) → TP HCM (SGN)
                        </h3>
                        <div className="detail-top">
                        T3, 13 Th04 2021  |  1 passengers  |  Phổ thông
                     
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
            {dataproducts.map((item,index) => {
                return (
                    <div key={index} className="card-flight">
                        <div>
                        <div className="flight-content-left">
                            <div className={item.cName}>
                               <a>{item.title}</a>                          
                            </div>
                            <div className="{item.cName} item2">
                               <a>{item.time_start}</a> 
                                <br/>
                                <a>{item.start}</a>                         
                            </div>
                            <div className="{item.cName} item2">
                                <a>{item.time_end} </a>
                                <br/>
                                {item.end}
                            </div>
                            <div className={item.cName}>
                                <a>{item.time}</a>
                                <br/>
                                <a>{item.style}</a>
                            </div>                                                        
                        </div>
                        <div className="flight-content-bottom">
                                <a>Chi tiết chuyến bay </a>
                                <a>Chi tiết vé </a>
                            </div>
                        </div>       
                        <div className="flight-content-right">                        
                            <div className={item.cName}>
                                <a>{item.price}</a>
                                <br/>
                                <div className="button-card"><a>Chọn</a></div>
                                </div>
                        </div>                      
                    </div>
                );
            })}
           
            </div>
        </div>
       
    );
}
