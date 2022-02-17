import styled from "styled-components";

export const Section = styled.section`
  height: 450px;
  padding: 30px 150px 30px 150px;
  display: flex;
  text-align: center;
  justify-content: space-around;

  @media screen and (max-width: 575px) {
    height: 1000px;
    width: 100%;
    margin: 0;
    padding: 0px 10px;
    justify-content: space-around;
    flex-direction: column;
  }
`;
export const Div = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  height: 350px;
  width: 450px;
  padding: 20px;
  border-radius: 5px;
  background: #fff;

  @media screen and (max-width: 575px) {
    width: 100%;
    height: 500px;
    margin-bottom: 10px;
  }
`;

export const Img = styled.img`
  height: 100px;
  width: 100px;

  @media screen and (max-width: 575px) {
    height: 150px;
    width: 150px;
  } ;
`;

export const P = styled.p`
  color: grey;
  text-align: justify;

  @media screen and (max-width: 575px) {
    font-size: 12px;
    margin-top: 20px;
  }
`;

