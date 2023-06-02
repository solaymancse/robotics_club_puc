import axios  from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { EventContent } from "../Events/EventsElements";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
import { TopBar } from "../TopBar/TopBar";

export const SingleSeminer = () => {
  const [seminer, setSeminer] = useState({});
  const location = useLocation();
  const path = location.pathname.split("/")[2];

 

  useEffect(() => {

    const getSeminer = async ()=>{
      const res = await axios.get("/seminer/" + path);

      setSeminer(res.data);
    }

    getSeminer();
    
  }, [path])
  console.log(seminer);
  
  return (
    <>
    <TopBar/>
    <Navbar/>
      <Container>
        <EventContent>
          <h3>{seminer.title}</h3>
          <img
            src={seminer.image}
            alt=""
          />
          <p>
           {seminer.desc}
          </p>
        </EventContent>
      </Container>
      <Footer/>
    </>
  );
};
