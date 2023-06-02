import React from 'react';
import { RiCopyrightLine } from 'react-icons/ri'

export const Copyrights = () => {
  return <div style={{background:'#333'}} className='py-4'>
      <p style={{color:'grey',textAlign:'center'}}>Copyright PUC Robotics Club <RiCopyrightLine/>2022 , All Rights Reserved</p>
      <p className='text-center text-secondary'>Developed by &nbsp; Solayman</p>
  </div>;
};
