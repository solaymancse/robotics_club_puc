import React from "react";
import { Section, Img , Links, H2, H1, MDiv,P, RDiv, Youtube, Facebook, Square, Instagram, ArrowRight } from "./FooterElements";




import logo from "../../images/logo.jpg";
import { Registration } from "../Registration/Registration";
import { Col, Row } from "react-bootstrap";

export const Footer = () => {
  return (
    <Section>
      <Row>
        <Col>
            <MDiv>
                <Img src={logo} />
                <H1>
                    Premier University
                    <br />
                    Robotics Club
                </H1>
            </MDiv>
            <hr style={{color:"#fff", width:"70px"}}/>
            <hr style={{color:"#fff", width:"140px",marginTop:"-10px"}}/>
          
          
          <div>
            <P >
                Minim Lorem eiusmod nulla reprehenderit proident et consequat aute.
                Sunt exercitation elit sit veniam sit enim dolor cillum id. Esse
                nulla ex tempor culpa aliqua est.Sunt exercitation elit sit veniam sit enim dolor cillum id. Esse
                nulla ex tempor culpa aliqua est.
            </P>
          </div>
          
         
        </Col>
        <Col>
          <H2>Quick Links</H2>
          <hr style={{color:"#fff", width:"70px"}}/>
            <hr style={{color:"#fff", width:"140px",marginTop:"-10px"}}/>
          <Row  xs={1} md={2}>
            <Col><Links to={Registration}><ArrowRight />Apply For Membership</Links></Col>
            <Col><Links to="/"> <ArrowRight />How to apply</Links></Col>
            <Col><Links to="/"> <ArrowRight />Rules and Regulations</Links></Col>
            <Col><Links to="/"> <ArrowRight />Events Details</Links></Col>
            <Col><Links to="/"> <ArrowRight /> Blog</Links></Col>
            <Col><Links to="/"> <ArrowRight />Gallary</Links></Col>
            <Col><Links to="/"> <ArrowRight />Premier University Chittagong</Links></Col>
            <Col><Links to="/"> <ArrowRight />UGC, Bangladesh </Links></Col>
            <Col><Links to="/"> <ArrowRight />Minister of Education, Bangladesh</Links></Col>
          </Row> 
        </Col>
        <Col>
          <H2>Contact Us</H2>
          <hr style={{color:"#fff", width:"70px"}}/>
            <hr style={{color:"#fff", width:"140px",marginTop:"-10px"}}/>
          <Links to="/">info@domain.com</Links>
          <RDiv>
              <a href="/"><Youtube/></a>
              <a href="/"><Facebook/></a>
              <a href="/"><Square/></a>
             <a href="/"> <Instagram/></a>
          </RDiv>
        </Col>
      </Row>
    </Section>
  );
};
