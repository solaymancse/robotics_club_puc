import React from 'react';
import { H1, Section } from '../Acheivement/AcheivementElements';
import { FlexBox } from './SeminerWorkshopElements';
import Data from '../../SeminerWorkshopData'
import { SeminerWorkshopCard } from './SeminerWorkshopCard';

export const SeminerWorkshop = () => {
  return <Section>
      <H1>Seminer & Workshop</H1>
      <FlexBox>
        {Data.map((data)=> <SeminerWorkshopCard date={data.date} title={data.title}/>)}
       
      </FlexBox>



  </Section>;
};
