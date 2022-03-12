import React from 'react'

import { Offcanvas } from 'react-bootstrap';
import { Contact, ContactDiv, List } from './MobileViewNavElements';
import { AiOutlineClockCircle } from 'react-icons/ai'
import { SocialLinks } from '../SocialLinks/SocialLinks';

export const MobileViewNav = () => {
  return (
    <div>
     <Offcanvas />
      <SocialLinks />
      <ContactDiv>
        <Contact>
          <List color="#333">
            <icon
              color="#34ace3"
              style={{ marginRight: "20px", marginTop: "-5px" }}
            >
              <AiOutlineClockCircle />
            </icon>
          
          </List>
          <List color="#333">
            <mail color="#34ace3" />
            
          </List>
          <List color="#333" style={{ marginTop: "5px" }}>
            <call color="#34ace3" />
           
          </List>
        </Contact>
      </ContactDiv>
    </div>
  )
}
