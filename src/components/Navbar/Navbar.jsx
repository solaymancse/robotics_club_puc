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
            <NavLink to="/home" activeStyle>
              Home
            </NavLink>
          </Item>
          <Items>
            <NavLink to="" activeStyle>
              About
            </NavLink>
              <Dropdown>
                <a href="/about"> About PUC</a>

                <a href="/"> About Robotics Club</a>

                <a href="/">
                  Member of Advisor Committee
                </a>

                <a href="/">Member of Ex Committee</a>
              </Dropdown>
          </Items>
          <Item>
            <NavLink to="/events" activeStyle>
              Events
            </NavLink>
          </Item>
          <Item>
            <NavLink to="/gallery" activeStyle>
              Gallery
            </NavLink>
          </Item>
          <Item>
            <NavLink to="/contact" activeStyle>
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
