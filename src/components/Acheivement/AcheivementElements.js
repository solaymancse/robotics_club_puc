import styled from "styled-components";

export const Section = styled.div`
  border-top: 1px solid lightgray;
  padding: 10px 150px;

  @media screen and (max-width: 575px) {
    width: 100%;
    padding: 10px;
  }
`;

export const Div = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template: repeat(2, 300px) / repeat(3, 525px);
  grid-gap: 15px;
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;

  @media screen and (max-width: 575px) {
    width: 100%;
  }
`;

export const H1 = styled.h1`
  font-size: 24px;
  font-family: "EB Garamond", serif;
`;
