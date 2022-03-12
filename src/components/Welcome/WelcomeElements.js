import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;


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
