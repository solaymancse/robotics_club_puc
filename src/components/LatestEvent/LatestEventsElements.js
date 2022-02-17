import styled from "styled-components";

export const Div = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const Img = styled.img`
  margin-right: 15px;
`;
export const Rdiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const H1 = styled.h1`
  font-size: 20px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;
export const Wrapper = styled.div`

  @media screen and (max-width: 575px){
      margin-top: 50px;
  }

`;