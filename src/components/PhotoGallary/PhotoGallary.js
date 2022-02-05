import React from 'react';
import { Section ,Img , Div, H1} from '../Acheivement/AcheivementElements';
import img17 from '../../images/image16.jpg'

export const PhotoGallary = () => {
  return <Section>
  <H1>Photo Gallary</H1>
  <a href="/AllPhoto.js">All Photos</a>
  <Div>
      <Img src={img17} alt="" />
      <Img src={img17} alt="" />
      <Img src={img17} alt="" />
      <Img src={img17} alt="" />
      <Img src={img17} alt="" />
      <Img src={img17} alt="" />
      <Img src={img17} alt="" />
      <Img src={img17} alt="" />
  </Div>
</Section>;
};
