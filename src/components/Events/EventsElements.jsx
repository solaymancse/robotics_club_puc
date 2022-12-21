import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
 height: 100%;
  border: 1px solid lightgray;
  padding: 30px 150px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 30px;

 
  @media (min-width: 320px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    padding: 10px;
    grid-gap: 0px;
  }
`;
