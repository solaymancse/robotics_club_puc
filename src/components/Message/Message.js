import React, { useEffect } from "react";
import { Section, Div, Img, P ,LeftSection, Intro} from "../Message/MessageElements";
import img6 from "../../images/image6.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export const Message = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Section>
        <Div data-aos="fade-up">
          <LeftSection>
            <Img src={img6} alt="vc_sir" />
            <Intro>
              Prof. Dr. Anupam Sen
              <br />
              Honorable Vice Chancellor<br/>
              Premier University of Chittagong
            </Intro>
          </LeftSection>
          <P>
            <FaQuoteLeft />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting
            industry... <FaQuoteRight />
            <br />
            <br/>
            <hr/>
           
          </P>
        </Div>
      </Section>
    </>
  );
};
