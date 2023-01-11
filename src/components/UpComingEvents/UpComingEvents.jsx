import { useState,useEffect } from "react";

import { EventCard } from "./EventCard";
import { Section, H1, Wrapper } from "./UpComingEventsElements";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";

export const UpComingEvents = (props) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchPosts = async ()=> {
      const res = await axios.get("/all-events");
      setEvents(res.data);
    }

    fetchPosts();
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Section>
      <H1 data-aos="fade-up">Up Coming Event</H1>
      <hr />
      <Wrapper>
        {events.map((data, index) => (
          <EventCard key={index} data={data}/>
        ))}
      </Wrapper>
    </Section>
  );
};
