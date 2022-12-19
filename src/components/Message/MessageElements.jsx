import styled from "styled-components";

export const Section = styled.div`
  height: 600px;
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 100px 0px;

  @media (min-width: 320px) and (max-width: 480px) {
    margin: 50px 0px 10px 0px;
   
    height: 730px;
   
  } ;
`;
export const Wrapper = styled.div`
position: relative;
width: 100%;
height: 100%;
`;

export const Div = styled.div`
  height:100%;
  width: 100%;
  display: flex;
  margin-top: 30px;

  @media (min-width: 320px) and (max-width: 480px) {
    height: 700px;
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    
  }
`;

export const Left = styled.div`

  
`;
export const Middle = styled.div`
display: flex;
margin: 50px 0 80px 0;
gap: 80px;
  
`;
export const LeftDiv = styled.div`
  flex: 1;
  height: 400px;
`;
export const RightDiv = styled.div`
flex: 1;
  height: 400px;
`;
export const LeftSide = styled.div`
flex: 1;
text-align: center;
align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

`;
export const RightSide = styled.div`
flex: 2;
text-align: center;
display: flex;
`;
export const P = styled.p`
  color: grey;
  font-size: 14px;
  text-align: justify;
  

  @media screen and (max-width: 575px) {
    font-size: 12px;
    margin-top: 20px;
  }
`;
export const Qoute = styled.p`
  color: grey;
  font-size: 14px;
  text-align: justify;
  margin-top: 18px;


  @media screen and (max-width: 575px) {
    font-size: 12px;
    margin-top: 20px;
  }
`;
export const Content = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 100%;
height: 100%;
  
`;

export const Container = styled.div`
padding:0px 150px;
border-top: 1px solid lightgray;
`;
export const Foot = styled.div`
  margin-top: 50px;
`;

export const ImgDiv = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid gray;

img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}

  @media screen and (max-width: 575px) {
    height: 150px;
    width: 150px;

    margin: auto;
  }
`;
export const Img = styled.img`
  height: 590px;
  width: 613px;
  border: 1px solid gray;
  margin-right: 60px;

  @media screen and (max-width: 575px) {
    height: 150px;
    width: 150px;

    margin: auto;
  }
`;

export const Desc = styled.p`
  text-align: justify;
  color: grey;
  font-size: 18px;
  margin-top: 30px;

  @media screen and (max-width: 575px) {
    font-size: 12px;
    margin-top: 20px;
  }
`;

export const H1 = styled.div`
  font-size: 18px;
  text-align: center;
  color: gray;

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 14px;
    margin-top: 10px;
    margin-left: auto;
  }
`;
export const H2 = styled.h2`
  font-size: 14px;
  text-align: center;
  color: gray;
  margin-top: 30px;
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 14px;
    margin-top: 10px;
    margin-left: auto;
  }
`;
export const Title = styled.div`
   font-size: 24px;
  letter-spacing: 3px;
  &:before{
    content: '';
    width: 380px;
    height: 3px;
    background-color: gray;
    position: absolute;
    top: 20px;
    right: 0;
    
  }
  &:after{
    content: '';
    width: 120px;
    height: 6px;
    background-color: #000000;
    position: absolute;
    top: 18px;
    left: 58%;
    
  }
  

  @media screen and (max-width: 575px) {
    font-size: 16px;
    padding-bottom: 30px;
  }
`;
export const Right = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  
`;
