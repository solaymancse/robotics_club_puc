import styled from "styled-components";

export const Section = styled.div`
  height: 700px;
  padding: 30px 150px 30px 150px;
  display: flex;
  background: red;
  text-align: center;
  justify-content: center;

  @media screen and (max-width: 575px) {
    margin-bottom: 10px;
    width: 100%;
    height: 520px;
    padding: 10px;
    
  } ;
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

  @media screen and (max-width: 575px) {
    height: 500px;
    width: 100%;
    padding: 20px;
    flex-direction: column;
    display: block;
  }
`;

export const Img = styled.img`
  height: 590px;
  width: 613px;

  margin-right: 60px;

  @media screen and (max-width: 575px) {
    height: 150px;
    width: 150px;

    margin: auto;
  }
`;

export const P = styled.p`
  text-align: justify;
  color: grey;
  font-size: 24px;

  @media screen and (max-width: 575px) {
    font-size: 12px;
    margin-top: 20px;
  }
`;

export const H1 = styled.div`
  font-size: 22px;
  color: #333;

  @media screen and (max-width: 575px) {
    font-size: 16px;
    margin-top: 10px;
    margin-left: auto;
  }
`;
export const Title = styled.div`
  font-size: 16px;
  font-weight: 600;

  @media screen and (max-width: 575px) {
    font-size: 16px;
    padding-bottom: 30px;
  }
`;
