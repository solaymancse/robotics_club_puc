import React from "react";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import img1 from '../../images/image1.jpg'
import img2 from '../../images/image2.jpg'
import img3 from '../../images/image3.jpg'
import styled  from 'styled-components';

const Img = styled.img`
  width: 100%;
`
export default function TopCarousel() {
  const settings = {
   
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 9000,
      autoplaySpeed: 5000,
      cssEase: "linear"
  };
  
  return (
    <div>
    <Slider {...settings}>
      <div>
        <Img src={img1} alt="/"/>
      </div>
      <div>
      <Img src={img2} alt="/"/>
      </div>
      <div>
      <Img src={img3} alt="/"/>
      </div>
      <div>
        <Img src={img1} alt="/"/>
      </div>
      <div>
      <Img src={img2} alt="/"/>
      </div>
      <div>
      <Img src={img3} alt="/"/>
      </div>
    </Slider>
  </div>
  );
}
