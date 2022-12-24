import styled from "styled-components";

export const Div = styled.div`
  margin: 100px 0;
  position: relative;
  @media screen and (max-width: 767px) {
    margin-top: 50px;
    padding: 0;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  gap: 50px;
  @media screen and (max-width: 575px) {
    margin: 0;
  }
`;

export const H1 = styled.h1`
  font-size: 24px;
  letter-spacing: 3px;
  &:before {
    content: "";
    width: 900px;
    height: 3px;
    background-color: gray;
    position: absolute;
    top: 20px;
    left: 40%;
  }
  &:after {
    content: "";
    width: 250px;
    height: 6px;
    background-color: #000000;
    position: absolute;
    top: 18px;
    left: 35%;
  }
  @media (min-width: 576px) and (max-width: 767px) {
    margin-bottom: 50px;
    font-weight: 600;

    &:before {
    content: "";
    width: 100%;
    height: 3px;
    background-color: gray;
    position: absolute;
    top: 36px;
    left: 8%;
  }
  &:after {
    content: "";
    width: 150px;
    height: 6px;
    background-color: #000000;
    position: absolute;
    top: 35px;
    left: 8%;
  }
  }
  @media screen and (max-width: 575px) {
    margin-bottom: 50px;
    font-weight: 600;

    &:before {
    content: "";
    width: 100%;
    height: 3px;
    background-color: gray;
    position: absolute;
    top: 36px;
    left: 10px;
  }
  &:after {
    content: "";
    width: 150px;
    height: 6px;
    background-color: #000000;
    position: absolute;
    top: 35px;
    left: 10px;
  }
  }
`;

export const TopCardDiv = styled.div`
margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
 
`;
export const BottomCardDiv = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }


`;
export const ImgDiv = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 20px;
  
  @media screen and (max-width: 575px) {
    width: 100px;
  height: 100px;
  }
`;
export const Top = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 576px) and (max-width: 767px) {
    p{
      font-size: 14px;
    }
  }
  @media screen and (max-width: 575px) {
    p{
      font-size: 12px;
    }
  }
`;

export const Bottom = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  flex-wrap: wrap;
`;
export const TopCom = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 20px;
  
  
`;
export const BottCom = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 20px;
  
 
  @media (min-width: 320px) and (max-width: 575px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    padding: 0 10px;
  }
  
`;
export const P = styled.div`
  @media screen and (max-width: 575px) {
 
      font-size: 12px;
  
  }
`;

export const Button = styled.div`
  background-color: #ff2162;
  border: 0.5px solid #ff2162;
  transition: 0.5s ease-in-out;
  padding: 5px 10px;
  color: #fff;
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
    color: #fff;
    &:hover {
      color: #333;
   
  }
  }
  &:hover {
    background-color: #fff;
   
  }
  @media screen and (max-width: 575px) {
    padding: 2px 5px;
    a{
      font-size: 12px;
    }
  }
`;
