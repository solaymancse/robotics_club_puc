import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import img7 from "../../images/image7.jpg";
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

export const AdviserMessage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Wrapper>
      <Title size="10px">Adviser Of Robotics Club</Title>
      <MainDiv data-aos="fade-right">
        <LeftSide>
          <ImgDiv>
            <img src={img7} alt="" />
          </ImgDiv>

          <H2>
            Prof. Dr. Taufique Sayeed <br />
            Dean, Faculty of Engineering <br />
            Professor and Chairman
          </H2>
        </LeftSide>
        <RightSide>
       
              <Qoute>
                <FaQuoteLeft />
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book{" "}
                <FaQuoteRight />
              </Qoute>

        </RightSide>
      </MainDiv>
    </Wrapper>
  );
};
