import React from "react";
import { Div, Section, Img , Links, H2, H1, LDiv, MDiv ,MiDiv, P, RDiv, Youtube, Facebook, Square, Instagram, ArrowRight } from "./FooterElements";




import logo from "../../images/logo.jpg";
import { Registration } from "../Registration/Registration";

export const Footer = () => {
  return (
    <Section>
      <Div>
        <LDiv>
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
          
         
        </LDiv>
        <MiDiv>
          <H2>Quick Links</H2>
          <hr style={{color:"#fff", width:"70px"}}/>
            <hr style={{color:"#fff", width:"140px",marginTop:"-10px"}}/>
          
          <Links to={Registration}><ArrowRight />Apply For Membership</Links>
         
          <Links to="/"> <ArrowRight />How to apply</Links>
     
          <Links to="/"> <ArrowRight />Rules and Regulations</Links>
  
          <Links to="/"> <ArrowRight />Events Details</Links>
          <Links to="/"> <ArrowRight /> Blog</Links>
          
          <Links to="/"> <ArrowRight />Gallary</Links>
         
          <Links to="/"> <ArrowRight />Premier University Chittagong</Links>
          <Links to="/"> <ArrowRight />UGC, Bangladesh </Links>
          <Links to="/"> <ArrowRight />Minister of Education, Bangladesh</Links>
        </MiDiv>
        <div>
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
        </div>
      </Div>
    </Section>
  );
};
