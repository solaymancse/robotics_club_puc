import styled from "styled-components";

export const Section = styled.section`
  height: 450px;
  display: flex;
  text-align: center;
  justify-content: space-around;
  width: 100%;

  @media (min-width: 320px) and (max-width: 480px) {
    height: 1000px;
    margin: 0;
  
    flex-direction: column;
  }
`;
export const Div = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  height: 400px;
  width: 450px;
  padding: 20px;
  border-radius: 5px;
  background: #fff;

  @media screen and (max-width: 575px) {
    width: 100%;
    height: 500px;
    margin-bottom: 10px;
  }
`;

export const Img = styled.img`
  height: 100px;
  width: 100px;

  @media screen and (max-width: 575px) {
    height: 150px;
    width: 150px;
  } ;
`;

export const H1 = styled.h1`
font-size: 16px;

`;
export const P = styled.p`
  color: grey;
  text-align: justify;

  @media screen and (max-width: 575px) {
    font-size: 12px;
    margin-top: 20px;
  }
`;
