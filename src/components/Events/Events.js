import React from 'react';
import { LatestEvent } from '../LatestEvent/LatestEvent';
import { UpComingEvents } from '../UpComingEvents/UpComingEvents';
import { Div , LeftDiv } from './EventsElements';



export const Events = () => {

  return <Div>
     <LeftDiv>
     <UpComingEvents/>
     </LeftDiv>
      <LatestEvent/>
  </Div>;
};
