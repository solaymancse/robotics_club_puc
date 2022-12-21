import React, { useEffect } from "react";

import { EventCard } from "./EventCard";
import { Section, H1, Div, Wrapper } from "./UpComingEventsElements";
import Data from "../../UpComingEventData";
import Aos from "aos";
import "aos/dist/aos.css";

export const UpComingEvents = (props) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Section>
      <H1 data-aos="fade-up">Up Coming Event</H1>
      <hr />
      <Wrapper>
        {Data.map((data, index) => (
          <EventCard key={index} title={data.title} content={data.content} />
        ))}
      </Wrapper>
    </Section>
  );
};
