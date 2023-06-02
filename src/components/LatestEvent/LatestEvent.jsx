import React, { useState,useEffect } from "react";
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
import { Link } from "react-router-dom";
import axios from 'axios'


export const LatestEvent = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchPosts = async ()=> {
      const res = await axios.get("/latest-events");
      setEvents(res.data);
    }

    fetchPosts();
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Wrapper>
      <H1 data-aos="fade-up">Latest Events</H1>
      <hr />
      {events.map((data, index) => (
        <Div key={index}>
          <Img src={data.image} height={100} width={100} alt="" />
          <Rdiv>
            <ContentDiv>
              <Left>
                <H3>27 March</H3>
              </Left>
              <RightDiv>
                <H2>
                  {data.title}
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
