import React from 'react'
import img14 from "../../images/image14.jpg";
import { Div,Img,H3,H2 } from './SeminerWorkshopElements'

export const SeminerWorkshopCard = (props) => {
    const {date, title } = props;

  return (
    <>

        <Div>
         <Img src={img14} />
         <H3>{date}</H3>
         <H2>{title}</H2>
         <a href="/">Read More</a>
         </Div>
       
 
    </>
  )
}
