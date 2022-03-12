import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  height: 1100px;
  border: 1px solid lightgray;
  padding: 30px 100px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 30px;

  @media screen and (max-width: 575px) {
    flex-direction: column;
    width: 100%;
    margin: 30px 0px;
    padding: 0px 0px 0px 10px;
  }
`;
