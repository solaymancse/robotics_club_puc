import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  img {
    height: 100vh;
    width: 100%;
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
  background-color: black;
  opacity: 0.6;
 
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
    line-height: 60px;
    color: #fff;
    font-family: 'Merriweather', serif;
    margin: 15px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    h1{
      text-align: center;
    }
  }
`;
