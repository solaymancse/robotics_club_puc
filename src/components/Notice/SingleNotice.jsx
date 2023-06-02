import axios from 'axios'
import { useState,useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { EventContent } from '../Events/EventsElements'
import { Footer } from '../Footer/Footer'
import { Navbar } from '../Navbar/Navbar'
import { TopBar } from '../TopBar/TopBar'

export const SingleNotice = () => {
    const [notice, setNotice] = useState({});
    const location = useLocation();
    const path = location.pathname.split("/")[2];
  
   
  
    useEffect(() => {
  
      const getNotice = async ()=>{
        const res = await axios.get("/notice/" + path);
  
        setNotice(res.data);
      }
  
      getNotice();
      
    }, [path])

  return (
    <div>
        <TopBar/>
        <Navbar/>
        <Container>
        <EventContent>
          <h3>{notice.title}</h3>
          <p>Last Updated: {new Date(notice.updatedAt).toDateString()}</p>
          <p>
           {notice.desc}
          </p>
        </EventContent>
      </Container>
        <Footer/>
    </div>
  )
}
