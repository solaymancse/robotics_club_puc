import React, { useState } from "react";

import {BsFillArrowRightCircleFill} from "react-icons/bs";
import logo from "../../images/logo.jpg";
import { Offcanvas } from "react-bootstrap";
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
  Item,
  Items,
  Dropdown,


} from "./NavbarElements";
import { Registration } from "../Registration/Registration";
import { MobileViewNav } from "../MobileWiewNav/MobileViewNav";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [modalShow, setModalShow] = useState(false);

  return (
    <Wrapper>
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
          <Item>
            <NavLink to="/">
              Home
            </NavLink>
          </Item>
          <Items>
            <NavLink to="/about">
              About
            </NavLink>
              <Dropdown>
                <Link to="/about"> About PUC</Link>

                <Link to="/about"> About Robotics Club</Link>

                <Link to="/committee">
                  Member of Advisor Committee
                </Link>

                <Link to="/ex-committee">Member of Ex Committee</Link>
              </Dropdown>
          </Items>
          <Item>
            <NavLink to="/events" >
              Events
            </NavLink>
          </Item>
          <Item>
            <NavLink to="/gallery" >
              Gallery
            </NavLink>
          </Item>
          <Item>
            <NavLink to="/contact" >
              Contact
            </NavLink>
          </Item>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/registration" onClick={setModalShow}>
            Registration
          </NavBtnLink>
         <BsFillArrowRightCircleFill size="30px" onClick={setModalShow}/>
        </NavBtn>
        <Registration show={modalShow} onHide={() => setModalShow(false)} />
      </Nav>
    </Wrapper>
  );
};
