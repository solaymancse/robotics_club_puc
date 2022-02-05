import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from '../../images/image1.jpg'
import img2 from '../../images/image2.jpg'
import img3 from '../../images/image3.jpg'


export default function TopCarousel() {
  
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block  w-100"
          
            src={img2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block  w-100"

            src={img3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
