import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  img {
    height: 100vh;
    width: 100%;
   object-position: center;
   
  }

  @media (min-width: 320px) and (max-width: 480px){
    img{
      height: 600px;
    }
  }
`;
export const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: #04152d;
  opacity: 0.5;
 
`;
export const Button = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  transition: 0.5s ease-in;
  img {
    height: 100px;
    width: 100px;
  }
  h1 {
    position: relative;
    font-weight: 800;
    font-size: 45px;
    line-height: 80px;
    color: #fff;
    font-family: 'Merriweather', serif;
    margin: 15px;
    letter-spacing: 10px;
    text-align: center;
     
  }

 
  @media (min-width: 426px) and (max-width:480px ){
    h1{
      line-height: 60px;
      font-size: 40px;
      letter-spacing: 4px;
    }
  }
  @media (max-width: 425px) {
    h1{
      line-height: 40px;
      font-size: 35px;
      letter-spacing: 4px;
    }
  }
`;
