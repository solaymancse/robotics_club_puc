import React from "react";
import { Button } from "react-bootstrap";
import img11 from '../../images/image11.jpg'
import { Div, Img, Section,H1, H2, P } from "./UpComingEventsElements";

export const UpComingEvents = () => {
  return (
    <>
      <Section>
        <H1 >Up Coming Event</H1>
        <hr/>
        <Div>
          <Img src={img11} height={100} width={100} alt="" />
          <div>
            <H2 >Up Coming Event Heading</H2>
            
            <P>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </P>
            
          </div>
          <div style={{marginLeft:'30px',textAlign:'center',marginTop:'10px'}}>
          <Button variant="primary">Register</Button>
          </div>
          
        </Div>
        <Div>
          <Img src={img11} height={100} width={100} alt="" />
          <div>
            <H2 style={{fontSize:"18px"}}>Up Coming Event Heading</H2>
            
            <P style={{color:'grey'}}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </P>
            
          </div>
          <div style={{marginLeft:'30px',textAlign:'center',marginTop:'10px'}}>
          <Button variant="primary">Register</Button>
          </div>
          
        </Div>
        <Div>
          <Img src={img11} height={100} width={100} alt="" />
          <div>
            <H2 >Up Coming Event Heading</H2>
            
            <P>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </P>
            
          </div>
          <div style={{marginLeft:'30px',textAlign:'center',marginTop:'10px'}}>
          <Button variant="primary">Register</Button>
          </div>
          
        </Div>
        <Div>
          <Img src={img11} height={100} width={100} alt="" />
          <div>
            <H2 >Up Coming Event Heading</H2>
            
            <P>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </P>
            
          </div>
          <div style={{marginLeft:'30px',textAlign:'center',marginTop:'10px'}}>
          <Button variant="primary">Register</Button>
          </div>
          
        </Div>
        <Div>
          <Img src={img11} height={100} width={100} alt="" />
          <div>
            <H2 >Up Coming Event Heading</H2>
            
            <P>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </P>
            
          </div>
          <div style={{marginLeft:'30px',textAlign:'center',marginTop:'10px'}}>
          <Button variant="primary">Register</Button>
          </div>
          
        </Div>
      </Section>
    </>
  );
};
