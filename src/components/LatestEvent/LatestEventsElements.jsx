import styled from "styled-components";


export const Wrapper = styled.div`
  @media (min-width: 320px) and (max-width: 480px) {
    margin-top: 50px;
  }
`;
export const Div = styled.div`
  display: flex;
  margin-bottom: 10px;

  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const Img = styled.img`
  margin-right: 15px;
  width: 30%;
  height: 100px;
  transition: transform .2s;
  object-fit: cover;
  &.hover{
    cursor: pointer;
    transform: scale(1.5);
  }
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    
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
a{
  text-decoration: none;
  color: #333;

  &:hover{
    background-color: #ff2162;
    border-color: #ff2162;
    color: #fff;
  }

}
`;
