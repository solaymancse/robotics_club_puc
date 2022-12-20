import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;

  padding: 50px 150px;
`
export const Portfolio = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  grid-template-rows: 1fr 1fr;
  grid-gap: 2px;
`
export const Button = styled.button`
 background: none;
  outline: none;
  font-weight: 100;
  letter-spacing: 2px;
  border: 1px solid #ffffff;
  color: #ffffff;
  text-transform: uppercase;
  padding: 10px;

  &:hover{
  transition: all 0.3s ease-in-out;
  background: #ffffff;
  color: #D1A39E;
  transform: scale(1.05);
  }
`
export const H2 = styled.h1`
    font-size: 24px;
  letter-spacing: 3px;
  &:before {
    content: "";
    width: 900px;
    height: 3px;
    background-color: gray;
    position: absolute;
    top: 15px;
    left: 30%;
  }
  &:after {
    content: "";
    width: 250px;
    height: 6px;
    background-color: #000000;
    position: absolute;
    top: 13px;
    left: 15%;
  }
`;

export const Overlay = styled.div`
 position: fixed;
 background: rgba(71, 69, 69, 0.7);
  opacity: 0.4;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
z-index: 999;
`
export const OverlayInner = styled.div`
  background: #ffffff;
  width: 700px;
  height: 600px;
  padding: 20px;
  position: relative;
  opacity: 1;
  transition: all 0.3s ease-in-out;
img{
  position: relative;
  width: 100%;
  height: 100%;
}

`