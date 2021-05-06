import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';

//module react-slick
export default function Carousel() {
    var settings = {
        dots: true, //dấu chấm để chuyển các div qua lại
        infinite: true, 
        speed: 500, // tốc độ chuyển
        slidesToShow: 3, // tổng số hình ảnh thể hiện owe một trang
        slidesToScroll: 1, // số hình ảnh được chuyển mỗi một lần bấm
        
      };
      return (
          <div className="background-slider"> 
        <Slider {...settings} className="slider">
            <div className="card-wrapper">
                <div className="card"> 
                    <div className="card-image">
                        <img src="https://ik.imagekit.io/tvlk/image/imageResource/2021/03/01/1614570758624-4599fcee4bafee488fdd966721436b2e.jpeg?tr=q-75,w-472" alt=""/>
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="https://ik.imagekit.io/tvlk/image/imageResource/2021/02/01/1612182671132-5be0f985643d40cc86fb485dac81f966.png?tr=q-75,w-472" alt=""/>
                    </div>
                </div>
            </div>    
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="https://ik.imagekit.io/tvlk/image/imageResource/2020/08/10/1597034751491-ae8f92064cc7c572baa41286a2069b88.png?tr=q-75,w-472" alt="" />
                    </div>
                </div>
            </div>
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-image">
                        <img src="https://ik.imagekit.io/tvlk/image/imageResource/2020/10/20/1603171521056-f0789f1ed03ff24c110b1390a9f8782b.jpeg?tr=q-75,w-472" alt="" />
                    </div>
                </div>
           </div>
        </Slider>
        </div>
      );
}


