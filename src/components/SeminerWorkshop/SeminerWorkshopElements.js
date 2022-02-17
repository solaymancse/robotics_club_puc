import styled from "styled-components";

export const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width:100%;
  gap: 10px;
  
`;

export const Div = styled.div`
  width: 525px;

  @media screen and (max-width: 575px){
    width: 100%;
  };
  
`;
export const Img = styled.img`
  width: 520px;
  height: 300px;

  @media screen and (max-width: 575px){
    width: 100%;
  }

 
`;

export const H3 = styled.h3`
  font-size: 16px;
  color: grey;
`;
export const H2 = styled.h2`
  font-size: 16px;
`;
