import styled from "styled-components";

export const Section = styled.div`
  border-top: 1px solid lightgray;
  padding: 20px 150px;
  @media (min-width: 991px) and (max-width: 1440px) {
    width: 100%;
    padding: 20px;
  }
  @media screen and (max-width: 991px) {
    width: 100%;
    padding: 10px;
  }
`;

export const Title = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    background-color: #ff2162;
    text-decoration: none;
    padding: 5px 10px;
    color: #fff;

    &:hover {
      background-color: #fff;
      color: #333;
      border: 0.5px solid lightgray;
    }
  }

  @media (max-width: 575px){
    a{
      padding: 5px;
      font-size: 12px;
    }

  }
`;
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
    left: 20%;
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
    top: 27px;
    left: 0;
  }
  &:after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #000000;
    position: absolute;
    top: 26px;
    left: 0;
  }
  }
`;
export const TitleOverlay = styled.div`
  background: rgba(229, 182, 177, 0.9);
  height: 100%;
  grid-column: 1/-1;
  grid-row: 1/-1;
  position: relative;
  display: grid;
  justify-items: center;
  padding-top: 10px;
  transform: translateY(80%);
  transition: all 0.3s ease-in-out;
  text-align: center;
`;
export const Div = styled.div`
  margin-top: 30px;
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  
  @media (min-width: 768px) and (max-width: 1024px){
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }
  @media (min-width: 320px) and (max-width: 767px){
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px;
  }
`;


export const H1 = styled.h1`
  font-size: 24px;
  font-family: "EB Garamond", serif;
`;

export const Content = styled.div`
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
  &:hover ${TitleOverlay}{
    transform: translateY(0%);
    
  }
`;
