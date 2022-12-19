import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin: 50px 0;


`;
export const Left = styled.div`
flex: 1;
text-align: center;

img{
  width: 200px;
  height: 200px;
}

`;
export const Right = styled.div`
flex: 3;
position: relative;
`;

export const Span = styled.span`
  font-size: 48px;
  letter-spacing: 3px;
  &:before{
    content: '';
    width: 480px;
    height: 3px;
    background-color: gray;
    position: absolute;
    top: 35px;
    right: 0;
    
  }
  &:after{
    content: '';
    width: 170px;
    height: 6px;
    background-color: #000000;
    position: absolute;
    top: 33.5px;
    left: 50%;
    
  }
 
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
margin-top: 30px;
  @media screen and (max-width: 575px) {
    padding: 0px 10px;
    font-size: 12px;
    margin-top: -40px;
  }
`;
