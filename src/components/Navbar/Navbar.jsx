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
  const [optSmModal, setOptSmModal] = useState(false);


  const toggleShow = () => setOptSmModal(!optSmModal);

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
        {/* <ToggleDiv>
          <Bars onClick={() => setIsDrawerOpen(true)} />
          <Togglebar
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
          />
        </ToggleDiv> */}
        <NavMenu>
          <Item>
            <NavLink to="/">Home</NavLink>
          </Item>
          <Items>
            <NavLink to="/about">About</NavLink>
            <Dropdown>
              <Link to="/puc.ac.bd"> About PUC</Link>

              <Link to="/about"> About Robotics Club</Link>

              <Link to="/committee">Member of Advisor Committee</Link>

              <Link to="/ex-committee">Member of Ex Committee</Link>
            </Dropdown>
          </Items>
          <Item>
            <NavLink to="/events">Events</NavLink>
          </Item>
          <Item>
            <NavLink to="/gallary">Gallary</NavLink>
          </Item>
          <Item>
            <NavLink to="/contact">Contact</NavLink>
          </Item>
        </NavMenu>
        <NavBtn onClick={toggleShow}>
          <NavBtnLink to="#" >
            Registration
          </NavBtnLink>
          <BsFillArrowRightCircleFill size="30px"/>
        </NavBtn>
        <Registration
          show={optSmModal}  setShow={setOptSmModal} toggleShow={toggleShow}
        />
      </Nav>
    </Wrapper>
  );
};
