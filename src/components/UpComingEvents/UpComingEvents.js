import React from "react"
import { EventCard } from "./EventCard";
import { Section, H1} from "./UpComingEventsElements";
import Data from '../../UpComingEventData'

export const UpComingEvents = (props) => {

  return (
    <>
      <Section>
        <H1>Up Coming Event</H1>
        <hr />
      {Data.map((data)=>  <EventCard title={data.title} content={data.content}/>)}
      </Section>
    </>
  );
};
