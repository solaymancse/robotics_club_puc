import {Div,Content,MainDiv} from './TopCarouselElement';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { sliderImage } from "../../Data";
import logo from '../../images/logo.jpg'
import { NavBtn, NavBtnLink } from '../Navbar/NavbarElements';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

export default function TopCarousel() {
  const settings = {
    pauseOnHover: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    
  };
  
  return (
    <div>
    <Slider {...settings}>
      {sliderImage.map((data,index)=>(
        <>
        <Div key={index}>
        <img src={data.img} alt="/"/>
        </Div>
        <Content>
        <img src={logo} alt="Premier University Logo" />
       <h1 data-aos="fade-right">Premier University Robotics Club </h1>
        </Content>
        <MainDiv>
       
       <NavBtn>
          <NavBtnLink to="/registration">
            Registration
          </NavBtnLink>
         <BsFillArrowRightCircleFill size="30px"/>
        </NavBtn>
        </MainDiv>
        </>
        ))}
    </Slider>
  </div>
  );
}
