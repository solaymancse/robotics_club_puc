import React, { useEffect } from "react";
import {
  Div,
  Img,
  Rdiv,
  Wrapper,
  RightDiv,
  Button,
} from "./LatestEventsElements";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  Left,
  H3,
  ContentDiv,
  H1,
  H2,
  P,
} from "../UpComingEvents/UpComingEventsElements";
import { MdLocationOn } from "react-icons/md";
import { latestEventData } from "../../Data";
import { Link } from "react-router-dom";

export const LatestEvent = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Wrapper>
      <H1 data-aos="fade-up">Latest Events</H1>
      <hr />
      {latestEventData.map((data, index) => (
        <Div key={index}>
          <Img src={data.img} height={100} width={100} alt="" />
          <Rdiv>
            <ContentDiv>
              <Left>
                <H3>27 March</H3>
              </Left>
              <RightDiv>
                <H2>
                  প্রিমিয়ার ইউনিভার্সিটিতে ‘ইলেক্ট্রিক্যাল মেশিন এন্ড ইটস
                  এপ্লিকেশন’ শীর্ষক পোস্টার প্রদর্শনী অনুষ্ঠিত
                </H2>
                <P>
                  <MdLocationOn />
                  Premier University Chiitagong
                </P>
              </RightDiv>
            </ContentDiv>
          </Rdiv>
        </Div>
      ))}

      <Button className="btn btn-outline-dark">
        <Link to="/all-events">View All</Link>
      </Button>
    </Wrapper>
  );
};
