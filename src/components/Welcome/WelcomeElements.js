import styled from "styled-components";

export const Div = styled.div`
  padding-left: 150px;
  padding-right: 150px;
  width: 100%;
  height: 700px;
  text-align: center;

  @media screen and (max-width: 768px) {
    height: 700px;
    padding: 10px;
  }
`;

export const Span = styled.span`
  font-size: 48px;
  letter-spacing: 3px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;
export const P = styled.p`
  font-size: 48px;
  font-family: "Vollkorn", serif;
  font-weight: 700;
  text-align: center;

  color: #333;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    height: 100px;
  }
`;

export const Intro = styled.div`
  font-size: 18px;
  color: grey;
  text-align: justify;
  width: 100%;

  @media screen and (max-width: 768px) {
    font-size: 12px;
    text-align: justify;
    margin-top: -20px;
    height: 400px;
  }
`;
