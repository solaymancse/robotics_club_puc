import styled from "styled-components";

export const Section = styled.div`
  height: 600px;
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 100px 0px;
  padding:20px;

  @media (max-width: 1444px) {
    padding:20px;

   gap: 20px;
    height: 100%;
    
   
  } ;
  @media (min-width: 576px) and (max-width: 1300px) {
   margin: 10px 0 30px 0;
    flex-direction: column-reverse;
    height: 100%;
    padding:0px;
   
  } ;
  @media (min-width: 481px) and (max-width: 575px) {
    margin-top: 20px;
    flex-direction: column-reverse;
   
  } ;
  @media (min-width: 320px) and (max-width: 480px) {
    margin: 0;
     padding:0px;
    height: 730px;
    flex-direction: column-reverse;
   
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

  
  @media (min-width: 320px) and (max-width: 767px) {
    width: 100%;
    padding: 0px;
    display: flex;
    flex-direction: column;
    margin-top: 0;
    
  }
`;
export const MainDiv = styled.div`
 display: grid;
 grid-template-columns: repeat(2, 1fr);
  margin-top: 30px;

  
  @media (min-width: 320px) and (max-width: 767px) {
    width: 100%;
    padding: 0px;
    display: flex;
    flex-direction: column;
    margin-top: 0;
    
  }
`;

export const Left = styled.div`

 @media (min-width: 320px) and (max-width: 1300px) {
    text-align: center;
    img{
      margin-top: 20px;
    }
  }
  
`;
export const Middle = styled.div`
display: flex;
margin: 50px 0 80px 0;
gap: 20px;


@media (min-width: 320px) and (max-width: 991px) {
   margin: 40px 0;
   gap: 0;
   flex-direction: column;
  }
  
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

  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column-reverse;
    height: 400px;
  }
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
  
  @media (min-width: 320px) and (max-width: 480px) { 
      margin-top: 20px;
      font-size: 12px;
     
   
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

@media (min-width: 1025px) and (max-width: 1200px) {
    padding:20px;
   
  } ;
@media (min-width: 768px) and (max-width: 1024px) {
    padding: 0 20px;
   
  } ;
@media (min-width: 320px) and (max-width: 767px) {
    padding: 0 10px;
   
  } ;
`;
export const Foot = styled.div`
  margin-top: 50px;
`;

export const ImgDiv = styled.div`
  width: 200px;
  height: 200px;
  

img{
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: bottom;
}

@media (min-width: 320px) and (max-width: 480px) {
  width: 100%;
  height: 100%;
  
   
};
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
  
  @media (min-width: 1025px) and (max-width: 1200px) {
    height: 300px;
    width: 400px;
    margin: auto;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    height: 500px;
    width: 60%;
    margin: auto;
  }
  
  @media (min-width: 575px) and (max-width: 767px) {
    height: 400px;
    width: 80%;
    margin: auto;
  }
  @media (min-width: 320px) and (max-width: 575px) {
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

  
  @media screen and (max-width: 1200px) {
    font-size: 13px;
    margin-top: 20px;
  }
`;

export const H1 = styled.div`
  font-size: 18px;
  text-align: center;
  color: gray;

  
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 12px;
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
    text-align: center;
  }
`;
export const Title2 = styled.div`
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
  @media (min-width: 992px) and (max-width: 1440px) {
      font-size: 16px;
      padding-bottom: 30px;
      &:before{
      content: '';
      width: 100%;
      height: 3px;
      background-color: gray;
      position: absolute;
      top: 54px;
      right: 0;
      
    }
    &:after{
      content: '';
      width: 120px;
      height: 6px;
      background-color: #000000;
      position: absolute;
      top: 50px;
      left: 0%;
      
    }
  }
  @media (min-width: 768px) and (max-width: 990px) {
    font-size: 16px;
    padding-bottom: 30px;
    &:before{
    content: '';
    width: 100%;
    height: 3px;
    background-color: gray;
    position: absolute;
    top: 50px;
    right: 0;
    
  }
  &:after{
    content: '';
    width: 120px;
    height: 6px;
    background-color: #000000;
    position: absolute;
    top: 48px;
    left: 0%;
    
  }
   
  } 
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 16px;
    padding-bottom: 30px;
    &:before{
    content: '';
    width: 100%;
    height: 3px;
    background-color: gray;
    position: absolute;
    top: 50px;
    right: 0;
    
  }
  &:after{
    content: '';
    width: 120px;
    height: 6px;
    background-color: #000000;
    position: absolute;
    top: 48px;
    left: 0%;
    
  }
   
  } 


`;
export const Title1 = styled.div`
   font-size: 24px;
  letter-spacing: 3px;
  &:before{
    content: '';
    width: 280px;
    height: 3px;
    background-color: gray;
    position: absolute;
    top: 20px;
    right: 0;
    
  }
  &:after{
    content: '';
    width: 90px;
    height: 6px;
    background-color: #000000;
    position: absolute;
    top: 18px;
    left: 62%;
    
  }
  @media (min-width: 992px) and (max-width: 1440px) {
      font-size: 16px;
      padding-bottom: 30px;
      &:before{
      content: '';
      width: 100%;
      height: 3px;
      background-color: gray;
      position: absolute;
      top: 52px;
      right: 0;
      
    }
    &:after{
      content: '';
      width: 120px;
      height: 6px;
      background-color: #000000;
      position: absolute;
      top: 50px;
      left: 0%;
      
    }
  }
  @media (min-width: 768px) and (max-width: 990px) {
    font-size: 16px;
    padding-bottom: 30px;
    &:before{
    content: '';
    width: 100%;
    height: 3px;
    background-color: gray;
    position: absolute;
    top: 50px;
    right: 0;
    
  }
  &:after{
    content: '';
    width: 120px;
    height: 6px;
    background-color: #000000;
    position: absolute;
    top: 48px;
    left: 0%;
    
  }
   
  } 
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 16px;
    margin-top: 80px;
    padding-bottom: 30px;
    &:before{
    content: '';
    width: 100%;
    height: 3px;
    background-color: gray;
    position: absolute;
    top: 150px;
    right: 0;
    
  }
  &:after{
    content: '';
    width: 120px;
    height: 6px;
    background-color: #000000;
    position: absolute;
    top: 148px;
    left: 0%;
    
  }
   
  } 


`;
export const Title = styled.div`
   font-size: 24px;
  letter-spacing: 3px;
  &:before{
    content: '';
    width: 280px;
    height: 3px;
    background-color: gray;
    position: absolute;
    top: 20px;
    right: 0;
    
  }
  &:after{
    content: '';
    width: 90px;
    height: 6px;
    background-color: #000000;
    position: absolute;
    top: 18px;
    left: 62%;
    
  }
  @media (min-width: 992px) and (max-width: 1440px) {
      font-size: 16px;
      padding-bottom: 30px;
      &:before{
      content: '';
      width: 100%;
      height: 3px;
      background-color: gray;
      position: absolute;
      top: 52px;
      right: 0;
      
    }
    &:after{
      content: '';
      width: 120px;
      height: 6px;
      background-color: #000000;
      position: absolute;
      top: 50px;
      left: 0%;
      
    }
  }
  @media (min-width: 768px) and (max-width: 990px) {
    font-size: 16px;
    padding-bottom: 30px;
    &:before{
    content: '';
    width: 100%;
    height: 3px;
    background-color: gray;
    position: absolute;
    top: 50px;
    right: 0;
    
  }
  &:after{
    content: '';
    width: 120px;
    height: 6px;
    background-color: #000000;
    position: absolute;
    top: 48px;
    left: 0%;
    
  }
   
  } 
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 16px;
    margin-top: 80px;
    padding-bottom: 30px;
    &:before{
    content: '';
    width: 100%;
    height: 3px;
    background-color: gray;
    position: absolute;
    top: 50px;
    right: 0;
    
  }
  &:after{
    content: '';
    width: 120px;
    height: 6px;
    background-color: #000000;
    position: absolute;
    top: 48px;
    left: 0%;
    
  }
   
  } 


`;
export const Right = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  
`;
