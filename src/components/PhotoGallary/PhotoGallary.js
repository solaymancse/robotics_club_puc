import React from "react";
import { Section, Img, Div} from "../Acheivement/AcheivementElements";
import img17 from "../../images/image16.jpg";
import { H1 } from "../ExeCommittee/ExeCommitteeElements";

export const PhotoGallary = () => {
  return (
    <Section>
      <H1>Photo Gallary</H1>
      {/* <a href="/AllPhoto.js">All Photos</a> */}
      <Div>
        <div><Img src={img17} alt="" /></div>
        <div><Img src={img17} alt="" /></div>
        <div><Img src={img17} alt="" /></div>
        <div><Img src={img17} alt="" /></div>
        <div><Img src={img17} alt="" /></div>
        <div><Img src={img17} alt="" /></div>
       
      </Div>
    </Section>
  );
};
