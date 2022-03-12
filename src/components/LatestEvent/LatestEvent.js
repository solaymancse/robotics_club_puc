import React, { useEffect } from "react";

import img11 from "../../images/image11.jpg";
import { ContentDiv, H1 } from "../UpComingEvents/UpComingEventsElements";
import { Div, Img, Rdiv, Wrapper, RightDiv,Button } from "./LatestEventsElements";
import Aos from "aos";
import "aos/dist/aos.css";
import { Left, H3 } from "./../UpComingEvents/UpComingEventsElements";
import { MdLocationOn } from "react-icons/md";


export const LatestEvent = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Wrapper>
      <H1 data-aos="fade-up">Latest Events</H1>
      <hr />
      <Div>
        <Img src={img11} height={100} width={100} alt="" />
        <Rdiv>
          <ContentDiv>
            <Left>
              <H3>27 March</H3>
            </Left>
            <RightDiv>
              <h2 style={{ fontSize: "18px" }}>
                প্রিমিয়ার ইউনিভার্সিটিতে ‘ইলেক্ট্রিক্যাল মেশিন এন্ড ইটস
                এপ্লিকেশন’ শীর্ষক পোস্টার প্রদর্শনী অনুষ্ঠিত
              </h2>
              <p style={{ color: "grey" }}>
                <MdLocationOn />
                Premier University Chiitagong
              </p>
            </RightDiv>
          </ContentDiv>
        </Rdiv>
      </Div>
      <Div>
        <Img src={img11} height={100} width={100} alt="" />
        <Rdiv>
          <ContentDiv>
            <Left>
              <H3>27 March</H3>
            </Left>
            <RightDiv>
              <h2 style={{ fontSize: "18px" }}>
                প্রিমিয়ার ইউনিভার্সিটিতে ‘ইলেক্ট্রিক্যাল মেশিন এন্ড ইটস
                এপ্লিকেশন’ শীর্ষক পোস্টার প্রদর্শনী অনুষ্ঠিত
              </h2>
              <p style={{ color: "grey" }}>
                <MdLocationOn />
                Premier University Chiitagong
              </p>
            </RightDiv>
          </ContentDiv>
        </Rdiv>
      </Div>
      <Div>
        <Img src={img11} height={100} width={100} alt="" />
        <Rdiv>
          <ContentDiv>
            <Left>
              <H3>27 March</H3>
            </Left>
            <RightDiv>
              <h2 style={{ fontSize: "18px" }}>
                প্রিমিয়ার ইউনিভার্সিটিতে ‘ইলেক্ট্রিক্যাল মেশিন এন্ড ইটস
                এপ্লিকেশন’ শীর্ষক পোস্টার প্রদর্শনী অনুষ্ঠিত
              </h2>
              <p style={{ color: "grey" }}>
                <MdLocationOn />
                Premier University Chiitagong
              </p>
            </RightDiv>
          </ContentDiv>
        </Rdiv>
      </Div>
      <Div>
        <Img src={img11} height={100} width={100} alt="" />
        <Rdiv>
          <ContentDiv>
            <Left>
              <H3>27 March</H3>
            </Left>
            <RightDiv>
              <h2 style={{ fontSize: "18px" }}>
                প্রিমিয়ার ইউনিভার্সিটিতে ‘ইলেক্ট্রিক্যাল মেশিন এন্ড ইটস
                এপ্লিকেশন’ শীর্ষক পোস্টার প্রদর্শনী অনুষ্ঠিত
              </h2>
              <p style={{ color: "grey" }}>
                <MdLocationOn />
                Premier University Chiitagong
              </p>
            </RightDiv>
          </ContentDiv>
        </Rdiv>
      </Div>
      <Div>
        <Img src={img11} height={100} width={100} alt="" />
        <Rdiv>
          <ContentDiv>
            <Left>
              <H3>27 March</H3>
            </Left>
            <RightDiv>
              <h2 style={{ fontSize: "18px" }}>
                প্রিমিয়ার ইউনিভার্সিটিতে ‘ইলেক্ট্রিক্যাল মেশিন এন্ড ইটস
                এপ্লিকেশন’ শীর্ষক পোস্টার প্রদর্শনী অনুষ্ঠিত
              </h2>
              <p style={{ color: "grey" }}>
                <MdLocationOn />
                Premier University Chiitagong
              </p>
            </RightDiv>
          </ContentDiv>
        </Rdiv>
      </Div>
      <Button className="btn btn-outline-dark">
        <a href="/">View All</a>

      </Button>
    </Wrapper>
  );
};
