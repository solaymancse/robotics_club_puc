import styled from "styled-components";

export const Section = styled.div`
  height: 700px;
  padding: 30px 150px 30px 150px;
  display: flex;
 
  text-align: center;
  justify-content: center;
 
  
  @media screen and (max-width: 575px){
    margin-top: -100px;
    margin-bottom: 40px;

  };


  @media screen and (max-width: 768px) {
    height: 400px;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    background: none;
    
  };
`;
 
export const Div = styled.div`
 box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  height: 650px;
  width: 100%;
  padding: 40px;
  background: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px){
    height: 400px;
    width: 100%;
    padding: 20px;
    flex-direction: column;
  }

`;
export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px){
    width: 100%;
    height: 200px;
    padding-bottom: 30px;
  }

`;


export const Img = styled.img`
  height: 590px;
  width: 613px;
  
  margin-right: 60px;
  


  @media screen and (max-width: 768px){
    height: 150px;
    width: 150px;
    border-radius: 50%;
    margin-right: 20px;
  }
  

`;

export const P = styled.p`
  text-align: justify;
  color: grey;
  font-size: 24px;
  
  
  @media screen and (max-width: 768px){
    font-size: 12px;

  }
  
  

`;

export const Intro = styled.div`
  font-size:22px;
  color:#333;
  text-align:center;
  margin-top: -300px;

  @media screen and (max-width: 575px){
    font-size: 16px;
  };

  @media screen and (max-width: 768px){
    font-size: 12px;
    margin-top: -100px;
    margin-left: 150px;
   
  };

`;