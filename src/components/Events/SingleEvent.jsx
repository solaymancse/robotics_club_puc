import axios  from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { EventContent } from "./EventsElements";

export const SingleEvent = () => {

  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const [event, setEvent] = useState({});

  useEffect(() => {

    const getEvent = async ()=>{
      const res = await axios.get("/events/" + path);

      setEvent(res.data);
    }

    getEvent();
    
  }, [path])
  
  return (
    <>
      <Container>
        <EventContent>
          <h3>{event.title}</h3>
          <img
            src={event.image}
            alt=""
          />
          <p>
           {event.description}
          </p>
        </EventContent>
      </Container>
    </>
  );
};
