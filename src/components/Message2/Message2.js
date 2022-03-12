import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Div, Img, P, Section,H1 } from "./Message2Elements";
import img7 from "../../images/image7.jpg";
import img9 from "../../images/image9.jpg";
import { Title } from "../Message/MessageElements";

export const Message2 = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Section>
        <Div data-aos="fade-right">
          <Title size="16px">Message From Honorable Dean of Engineering Faculty</Title>
          <div className="row">
            <div className="col-12">
              <Img src={img7} alt="" />
            </div>
            <div className="col-12">
              <H1>
                Prof. Dr. Taufique Sayeed <br />
                Dean, Faculty of Engineering <br />
                Professor and Chairman
                <br /> Department of CSE
              </H1>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <P>
               <FaQuoteLeft /> 
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book{" "}
                <FaQuoteRight />
              </P>
            </div>
          </div>
        </Div>
        <Div data-aos="fade-left">
          <Title>Message From Honorable Chairman Of EEE</Title>
          <div className="row">
            <div className="col-12">
              <Img src={img9} alt="" />
            </div>
            <div className="col-12">
              <H1>
                Tuton Chandra Mallick <br />
                Associate Professor & Chairman <br />
                Department of EEE
              </H1>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <P>
                <FaQuoteLeft /> 
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book{" "}
                <FaQuoteRight />
              </P>
            </div>
          </div>
        </Div>
      </Section>
    </>
  );
};
