import styled from "styled-components";

export const Div = styled.div`
  padding-left: 150px;
  padding-right: 150px;
  width: 100%;
  height: 700px;
  text-align: center;

  @media screen and (max-width: 575px) {
    height: 700px;
    width: 100%;
    padding: 0;
    display: block;
  } ;
`;

export const Span = styled.span`
  font-size: 48px;
  letter-spacing: 3px;

  @media screen and (max-width: 575px) {
    font-size: 20px;
  }
`;
export const P = styled.p`
  font-size: 48px;
  font-family: "Vollkorn", serif;
  font-weight: 700;
  text-align: center;

  color: #333;

  @media screen and (max-width: 575px) {
    font-size: 16px;
    height: 100px;
  }
`;

export const Intro = styled.div`
  font-size: 18px;
  color: grey;
  text-align: justify;
  width: 100%;

  @media screen and (max-width: 575px) {
    padding: 0px 10px;
    font-size: 12px;
    margin-top: -40px;
  }

  
`;
