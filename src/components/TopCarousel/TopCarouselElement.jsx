import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  img {
    height: 100vh;
    width: 100%;
  }
`;
export const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: black;
  opacity: 0.6;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
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
  }
`;
export const MainDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
