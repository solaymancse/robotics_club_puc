import styled from "styled-components";

export const Div = styled.div`
  padding-left: 150px;
  padding-right: 150px;
  margin-top: 30px;

  @media screen and (max-width: 575px){
    margin-top: 50px;
    padding: 0;
  }
`;
export const TopSec = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  justify-content: space-between;
`;

export const TopDiv = styled.div`
  display: flex;
  margin-top: 50px;
`;
export const Img = styled.img`
  border-radius: 50%;
  height: 100px;
  width: 100px;
  margin-bottom: 10px;
`;

export const P = styled.p`
  text-align: center;
  font-family: "EB Garamond", serif;
  font-weight: 400;
`;

export const H1 = styled.h1`
  text-align: center;
  font-family: "Dosis", sans-serif;
  width: 100%;
  background: #242c42;

  @media screen and (max-width: 575px) {
    margin-bottom: 50px;
    
    color: #fff;
    font-weight: 600;
    padding: 10px;
  }
`;
export const Container = styled.div`
  margin: 30px 300px;
  text-align: center;

  @media screen and (max-width: 575px) {
    margin: 0;
  }
`;
