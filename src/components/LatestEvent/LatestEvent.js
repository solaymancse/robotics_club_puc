import React,{ useEffect } from 'react';
import img11 from '../../images/image11.jpg'
import { H1 } from '../UpComingEvents/UpComingEventsElements';
import { Div, Img ,Rdiv,Wrapper} from './LatestEventsElements';
import Aos from "aos";
import "aos/dist/aos.css";

export const LatestEvent = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return <Wrapper>
      <H1 data-aos="fade-up">Latest Events</H1>
      <hr/>
      <Div>
          <Img src={img11} height={100} width={100} alt=""/>
          <Rdiv>
          <h2 style={{fontSize:"18px"}}>Latest Events Heading</h2>
          <p style={{color:'grey'}}>Lorem Ipsum is simply dummy text of the printing and typesetting
            industry</p>
          </Rdiv>
      </Div>
      <Div>
          <Img src={img11} height={100} width={100} alt=""/>
          <Rdiv>
          <h2 style={{fontSize:"18px"}}>Latest Events Heading</h2>
          <p style={{color:'grey'}}>Lorem Ipsum is simply dummy text of the printing and typesetting
            industry</p>
          </Rdiv>
      </Div>
      <Div>
          <Img src={img11} height={100} width={100} alt=""/>
          <Rdiv>
          <h2 style={{fontSize:"18px"}}>Latest Events Heading</h2>
          <p style={{color:'grey'}}>Lorem Ipsum is simply dummy text of the printing and typesetting
            industry</p>
          </Rdiv>
      </Div>
      <Div>
          <Img src={img11} height={100} width={100} alt=""/>
          <Rdiv>
          <h2 style={{fontSize:"18px"}}>Latest Events Heading</h2>
          <p style={{color:'grey'}}>Lorem Ipsum is simply dummy text of the printing and typesetting
            industry</p>
          </Rdiv>
      </Div>
      <Div>
          <Img src={img11} height={100} width={100} alt=""/>
          <Rdiv>
          <h2 style={{fontSize:"18px"}}>Latest Events Heading</h2>
          <p style={{color:'grey'}}>Lorem Ipsum is simply dummy text of the printing and typesetting
            industry</p>
          </Rdiv>
      </Div>
  </Wrapper>
};
