import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  padding: 50px 150px;
margin-top: 60px;

  @media (min-width: 1024px) and (max-width: 1200px) {
    padding: 20px;
  }
  @media (max-width: 1023px) {
    padding: 10px;
  }
`
export const Portfolio = styled.div`
  width: 100%;
  background: #ffffff;
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
  grid-template-rows: 1fr 1fr;
  grid-gap: 2px;

  @media (min-width: 1024px) and (max-width: 1200px){
    margin-top: 20px;
    grid-gap: 20px;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    grid-template-rows: repeat(4, minmax(270px, 1fr));
    height: 200px;
  }
  @media (min-width: 576px) and (max-width: 1023px){
    margin-top: 20px;
    grid-template-columns: repeat(2, minmax(100px, 1fr));
    grid-template-rows: repeat(8, minmax(200px, 1fr));
    height: 200px;
  }
  @media (max-width: 575px){
    margin-top: 20px;
    grid-template-columns: repeat(2, minmax(100px, 1fr));
    grid-template-rows: repeat(8, minmax(200px, 1fr));
    height: 200px;
  }
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

  @media (max-width: 575px) {
    font-size: 12px;
 
  &:before {
    content: "";
    width: 180px;
    height: 3px;
    background-color: gray;
    position: absolute;
    top: 25px;
    left: 0;
  }
  &:after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #000000;
    position: absolute;
    top: 25px;
    left: 0;
  }
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
export const Div = styled.div`
  position: relative;
  background: #f2dad7;
  overflow: hidden;
  height: 300px;
  img{
    position: absolute;
width: 100%;
height: 100%;
object-fit: cover;
  }


`