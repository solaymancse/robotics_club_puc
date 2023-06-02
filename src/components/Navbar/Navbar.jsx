import React, { useState,useEffect } from "react";

import { BsFillArrowRightCircleFill } from "react-icons/bs";
import logo from "../../images/logo.jpg";
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
  ToggleDiv,
} from "./NavbarElements";
import { Registration } from "../Registration/Registration";
import { Link } from "react-router-dom";
import { Togglebar } from "../Togglebar/Togglebar";

export const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  return (
    <Wrapper top={scrolled ? '0px':'30px'}>
      <Nav>
        <Div>
          <Image src={logo} alt="" />
          <H1>
            Premier University <br /> <SPAN>Robotics Club</SPAN>
          </H1>
        </Div>
        <ToggleDiv>
          <Bars onClick={() => setIsDrawerOpen(true)} />
          <Togglebar
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
          />
        </ToggleDiv>
        <NavMenu>
          <Item>
            <NavLink to="/">HOME</NavLink>
          </Item>
          <Items>
            <NavLink to="/about">ABOUT</NavLink>
            <Dropdown>
              <Link to="/puc.ac.bd"> About PUC</Link>

              <Link to="/about"> About Robotics Club</Link>

              <Link to="/committee">Member of Advisor Committee</Link>

              <Link to="/ex-committee">Member of Ex Committee</Link>
            </Dropdown>
          </Items>
          <Item>
            <NavLink to="/events">EVENTS</NavLink>
          </Item>
          <Item>
            <NavLink to="/gallary">GALLARY</NavLink>
          </Item>
          <Item>
            <NavLink to="/contact">CONTACT</NavLink>
          </Item>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="#" onClick={setModalShow}>
            Registration
          </NavBtnLink>
          <BsFillArrowRightCircleFill size="30px" onClick={setModalShow} />
        </NavBtn>
        <Registration
          show={modalShow}
          close={setModalShow}
          onHide={() => setModalShow(false)}
        />
      </Nav>
    </Wrapper>
  );
};
