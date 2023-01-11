import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const Section = styled.div`
  width: 100%;
  height: auto;
  padding-right: 20px;
  

  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 10px;
  };
  @media (min-width: 320px) and (max-width: 767px) {
    padding: 0px;
  };
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
 

  @media (min-width: 1025px) and (max-width: 1200px) {
    grid-template-columns: repeat(1, 1fr);
    
  };
  @media (min-width: 320px) and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    
  };
`;
export const ContentDiv = styled.div`
  display: flex;
  margin-top: 20px;
  
  
`;
export const Left = styled.div`
  border-bottom: 2px solid #333;
  height: 50px;
  margin-right: 20px;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 500px;

  @media (min-width: 320px) and (max-width: 1024px) {
    width: 100%;
    flex-direction: column;
  } ;
`;

export const Img = styled.img`
  margin-right: 15px;
  height: 300px;
  width: 100%;

  @media (min-width: 1025px) and (max-width: 1200px) {
    width: 100%;
    height: 150px;
    object-fit:cover;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 150px;
    object-fit:cover;
  }
`;

export const H1 = styled.h1`
  font-size: 20px;

  @media screen and (max-width: 575px) {
    font-size: 18px;
    padding: 20px 0px;
    background: #242c42;
    color: #fff;
    font-weight: 600;
    text-align: center;
  }
`;

export const Title = styled.div`
a{
  color: #333;
  text-decoration: none;
  font-weight: 500;
cursor: pointer;
  &:hover{
   
    text-decoration: underline;
  }


  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
}
`;
export const H2 = styled.h2`
  font-size: 18px;
  font-weight: 500;
cursor: pointer;
  &:hover{
    text-decoration: underline;
  }


  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
export const H3 = styled.h3`
  font-size: 20px;

 
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const P = styled.p`
  color: grey;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
