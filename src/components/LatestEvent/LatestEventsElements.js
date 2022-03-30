import styled from "styled-components";


export const Wrapper = styled.div`
  @media (min-width: 320px) and (max-width: 480px) {
    margin-top: 50px;
  }
`;
export const Div = styled.div`
  display: flex;

  margin-bottom: 10px;
`;

export const Img = styled.img`
  margin-right: 15px;
  width: 30%;
  height: 100px;
  transition: transform .2s;

  &.hover{
    cursor: pointer;
    transform: scale(1.5);
  }
`;
export const Rdiv = styled.div`
  display: flex;
  flex-direction: column;
`;
export const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const H1 = styled.h1`
  font-size: 20px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  text-align: center;
  text-decoration: none;
`;
