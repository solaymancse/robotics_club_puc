import React from 'react';
import { Section ,Img , Div} from './AcheivementElements';
import img17 from '../../images/image17.jpg'
import { H1 } from '../ExeCommittee/ExeCommitteeElements';


export const Acheivement = () => {
  return <Section>
      <H1>Acheivement</H1>
      <Div>
          <div><Img src={img17} alt="" /></div>
          <div><Img src={img17} alt="" /></div>
          <div><Img src={img17} alt="" /></div>
          <div><Img src={img17} alt="" /></div>
          <div><Img src={img17} alt="" /></div>
          <div><Img src={img17} alt="" /></div>
         
      </Div>
  </Section>;
};
