import React, { useState } from "react";

import logo from "../../images/logo.jpg";
import { Container, NavDropdown, Offcanvas } from "react-bootstrap";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Image,
  H1,
  SPAN,
  Div,
  Wrapper,
} from "./NavbarElements";
import { Registration } from "../Registration/Registration";
import { MobileViewNav } from "./../MobileWiewNav/MobileViewNav";

export const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [modalShow, setModalShow] = useState(false);

  return (
    <Wrapper>
      <Container>
        <Nav>
          <Div>
            <Image src={logo} alt="" />
            <H1>
              Premier University <br /> <SPAN>Robotics Club</SPAN>
            </H1>
          </Div>
          <Bars onClick={handleShow} />
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>{<MobileViewNav />}</Offcanvas.Body>
          </Offcanvas>
          <NavMenu>
            <NavLink to="/home" activeStyle>
              Home
            </NavLink>
            <NavLink to="/about" activeStyle>
              About
              <NavDropdown id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  About PUC
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  About Robotics Club
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Member of Advisor Committee
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Member of Ex Committee
                </NavDropdown.Item>
              </NavDropdown>
            </NavLink>
            <NavLink to="/events" activeStyle>
              Events
            </NavLink>
            <NavLink to="/gallery" activeStyle>
              Gallery
            </NavLink>
            <NavLink to="/contact" activeStyle>
              Contact
            </NavLink>
            <NavBtn>
              <NavBtnLink to="/registration" onClick={setModalShow}>
                Registration
              </NavBtnLink>
            </NavBtn>
          </NavMenu>
          <Registration show={modalShow} onHide={() => setModalShow(false)} />
        </Nav>

        
      </Container>
    </Wrapper>
  );
};
