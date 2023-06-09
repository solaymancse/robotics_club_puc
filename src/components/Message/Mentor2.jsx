import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import img from "../../images/image10.jpg";
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

export const Mentor2 = () => {
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
            Sujan Chowdhury <br />
            Lecturer <br />
            Department of Electrical and Electronic Engineering
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
