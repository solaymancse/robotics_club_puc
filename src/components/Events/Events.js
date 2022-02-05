import React from 'react';
import { LatestEvent } from '../LatestEvent/LatestEvent';
import { UpComingEvents } from '../UpComingEvents/UpComingEvents';
import { Div } from './EventsElements';


export const Events = () => {
  return <Div>
      <UpComingEvents/>
      <LatestEvent/>
  </Div>;
};
