import { Div, Content, Button } from "./TopCarouselElement";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { sliderImage } from "../../Data";
import logo from "../../images/logo.jpg";
import { NavBtn, NavBtnLink } from "../Navbar/NavbarElements";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useState } from "react";
import { Registration } from "../Registration/Registration";

export default function TopCarousel() {

  const [modalShow, setModalShow] = useState(false);
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
    <>
      <Slider {...settings}>
        {sliderImage.map((data, index) => (
          <Div  key={index}>
            <>
              <img src={data.img} alt="/" />
            </>
            <Content></Content>
          </Div>
        ))}
      </Slider>
      <Button>
        <img src={logo} alt="Premier University Logo" />
        <h1 data-aos="fade-right">Premier University Robotics Club </h1>
        <NavBtn data-aos="fade-left"  onClick={setModalShow}>
          <NavBtnLink to="/registration">Registration</NavBtnLink>
          <BsFillArrowRightCircleFill size="30px"  onClick={setModalShow}/>
        </NavBtn>
        
      </Button>
      <Registration show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
