import React, { useState } from "react"
import logo  from '../../images/logo.jpg'
import { NavDropdown } from "react-bootstrap";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, Image, H1, SPAN, Div} from './NavbarElements'
import { Registration } from "../Registration/Registration";

export const Navbar = () => {
  
  const [modalShow, setModalShow] = useState(false);

  
  return (
    <>
   
      <Nav>
        <Div>
          <Image src={logo} alt=""/> 
          <H1>Premier University <br/> <SPAN>Robotics Club</SPAN></H1>
          </Div>    
        <Bars />
        <NavMenu>
          <NavLink to="/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          <NavDropdown id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">About PUC</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">About Robotics Club</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Member of Advisor Committee</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Member of Ex Committee</NavDropdown.Item>
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
              <NavBtnLink to='/registration' onClick={setModalShow}>
                Registration
              </NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>

      <Registration
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    

    </>
  );
};
