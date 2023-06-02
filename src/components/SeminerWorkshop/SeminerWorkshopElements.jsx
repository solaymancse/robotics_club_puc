import styled from "styled-components";

export const FlexBox = styled.div`
  display: grid;
  grid-template: repeat(2, 450px) / repeat(3, 533px);
  gap: 10px;

  @media (min-width: 1201px) and (max-width: 1555px) {
    grid-template-columns: repeat(3,minmax(100px, 1fr));
    grid-template-rows: repeat(3, 1fr);
    margin-top: 50px;
   
 
    
  }
  @media (min-width: 991px) and (max-width: 1200px) {
    grid-template-columns: repeat(2,minmax(100px, 1fr));
    grid-template-rows: repeat(3, 1fr);
    margin-top: 50px;
   
 
    
  }
  @media (min-width: 576px) and (max-width: 991px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
    grid-template-rows: repeat(3, 1fr);
    margin-top: 50px;
  }
  @media (max-width: 575px) {
    grid-template-columns: repeat(1, minmax(100px, 1fr));
    grid-template-rows: repeat(4, minmax(200px, 1fr));
    margin-top: 50px;
  }
`;

export const Div = styled.div`
  a {
    text-decoration: none;
  }
  @media screen and (max-width: 575px) {
    width: 100%;
    a {
      font-size: 12px;
    }
  } ;
`;
export const Img = styled.img`
  width: 520px;
  height: 300px;

 
  @media screen and (max-width: 1555px) {
    width: 100%;
    height: 280px;
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    height: 200px;
  }
`;

export const H3 = styled.h3`
  font-size: 16px;
  color: grey;
  margin-top: 10px;

  @media (max-width: 575px) {
    font-size: 14px;
  }
`;

export const H2 = styled.h1`
  font-size: 24px;
  letter-spacing: 3px;
  &:before {
    content: "";
    width: 900px;
    height: 3px;
    background-color: gray;
    position: absolute;
    top: 15px;
    left: 20%;
  }
  &:after {
    content: "";
    width: 250px;
    height: 6px;
    background-color: #000000;
    position: absolute;
    top: 13px;
    left: 15%;
  }
  @media (max-width: 1555px) {
  
    &:before {
    content: "";
    width: 120px;
    height: 3px;
    background-color: gray;
    position: absolute;
    top: 27px;
    left: 0;
  }
  &:after {
    content: "";
    width: 80px;
    height: 6px;
    background-color: #000000;
    position: absolute;
    top: 26px;
    left: 0;
  }
  }
  @media (max-width: 991px) {
    font-size: 12px;
    &:before {
    content: "";
    width: 180px;
    height: 3px;
    background-color: gray;
    position: absolute;
    top: 27px;
    left: 0;
  }
  &:after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #000000;
    position: absolute;
    top: 26px;
    left: 0;
  }
  }
`;