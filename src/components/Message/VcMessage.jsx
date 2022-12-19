import React, { useEffect } from "react";
import {
  Section,
  Left,
  Img,
  H1,
  Desc,
  Title,
  Foot,
  Right,
  Content,
} from "../Message/MessageElements";
import img6 from "../../images/image6.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export const VcMessage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Section>
      <Left>
        <Img src={img6} alt="vc_sir" />
      </Left>
      <Right>
        <Title size="24px">Message From Honorable Vice Chancellor</Title>
        <Content>
          <Desc>
            <FaQuoteLeft />
            Premier University at Chittagong,Bangladesh,has been established at
            the beginning of the millennium.Though not very old, it has gained
            renown as one of the best universities in Bangladesh. In our
            knowledge-based era, Premier University is contributing immensely to
            the socio-economic development process in Bangladesh through its
            quality teaching and research. It has six faculties : Arts, Business
            Studies, Engineering, Science, Law and Social Science. These
            faculties have been producing brilliant professionals and academics
            who are adding both quantitatively & qualitatively great values to
            the larger society. This website will give you an overview why
            Premier University has acquired international reputation as a center
            for higher learning. I hope when you visit Premier University in
            person or online, you will enjoy your experience with us.{" "}
            <FaQuoteRight />
          </Desc>

          <Foot>
            <H1>
              Prof. Dr. Anupam Sen
              <br />
              Honorable Vice Chancellor
              <br />
              Premier University of Chittagong
            </H1>
          </Foot>
        </Content>
      </Right>
    </Section>
  );
};
