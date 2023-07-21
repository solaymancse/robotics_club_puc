import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import img from "../../images/image31.jpg";
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
            Department of EEE
          </H2>
        </LeftSide>
        <RightSide>

          <Qoute>
            <FaQuoteLeft />
            Dear Premier University Robotics Club,
            It is a matter of great pleasure and privilege to be a part of Premier University Robotics Club. I am reaching out as an adviser with some exciting opportunities for your esteemed robotics club. It is my pleasure to welcome prospective students to be a part of this prestigious club. At Premier University, the interest to the field of robotics has caught our attention, and we would like to extend our support.

            By partnering with us, you can gain access to valuable mentorship, resources, collaboration opportunities, exposure, and exclusive discounts. We believe in club's potential to achieve great things in robotics, and we are here to help you along the way.We are thrilled to witness the remarkable accomplishments that await Premier University Robotics Club with our assistance. The club will also extend support to the participants of robotics-related competitions that are held at all over the world.
            <FaQuoteRight />
          </Qoute>

        </RightSide>
      </MainDiv>
    </Wrapper>
  );
};
