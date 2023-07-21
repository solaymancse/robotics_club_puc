import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import img from "../../images/image30.jpg";
import {
  MainDiv,
  Title,
  LeftSide,
  RightSide,
  ImgDiv,
  H2,
  Wrapper,
  Qoute
} from "../Message/MessageElements";

export const Mentor1 = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper>
      <Title size="10px">Mentor Of Robotics Club</Title>
      <MainDiv data-aos="fade-right">
        <LeftSide>
          <ImgDiv>
            <img src={img} alt="" />
          </ImgDiv>

          <H2>
           Sumen Dutta <br />
           Lecturer <br />
            Department of EEE
          </H2>
        </LeftSide>
        <RightSide>
       
              <Qoute>
                <FaQuoteLeft />
                I wanted to take a moment to acknowledge the incredible efforts and achievements
of each member in our club. Your passion, talent, and commitment to robotics
have been truly remarkable. I am continually impressed by your ability to
collaborate effectively and think critically when faced with challenges. Your
dedication to pushing the boundaries of innovation is inspiring, and it is evident in
the quality of work you produce. Remember, success is not measured solely by
competition victories but also by the knowledge and skills you acquire along the
way. Embrace every opportunity to learn, grow, and expand your horizons within
the field of robotics. As your advisor, I am here to support and guide you in your
endeavors. If you ever feel overwhelmed or need assistance, please don't hesitate to
reach out. Together, we can overcome any obstacles and achieve great things. I am
incredibly proud to be a part of this exceptional club and witness your journey
firsthand. Your passion and dedication to robotics will undoubtedly lead you to a
future filled with limitless possibilities. Keep up the incredible work!
                <FaQuoteRight />
              </Qoute>

        </RightSide>
      </MainDiv>
    </Wrapper>
  );
};
