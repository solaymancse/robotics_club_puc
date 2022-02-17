import React from 'react';
import { Section ,Img , Div} from './AcheivementElements';
import img17 from '../../images/image17.jpg'
import { H1 } from '../UpComingEvents/UpComingEventsElements';

export const Acheivement = () => {
  return <Section>
      <H1>Acheivement</H1>
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
