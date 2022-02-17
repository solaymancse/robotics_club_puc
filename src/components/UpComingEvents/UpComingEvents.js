import React,{ useEffect } from "react"
import { EventCard } from "./EventCard";
import { Section, H1} from "./UpComingEventsElements";
import Data from '../../UpComingEventData'
import Aos from "aos";
import "aos/dist/aos.css";

export const UpComingEvents = (props) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Section>
        <H1 data-aos="fade-up">Up Coming Event</H1>
        <hr />
      {Data.map((data)=>  <EventCard title={data.title} content={data.content}/>)}
      </Section>
    </>
  );
};
