import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding-right: 20px;
  height: 700px;

  @media screen and (max-width: 575px) {
    width: 100%;
    margin: 0;
  } ;
`;

export const Card = styled.div`
  display: flex;
  margin-bottom: 10px;

  @media screen and (max-width: 575px) {
    width: 100%;
  } ;
`;

// export const Div = styled.div`
//     display: flex;
//     margin-bottom: 10px;

//     @media screen and (max-width: 575px){
//         width: 400px;

//     };
//     @media screen and (max-width: 768px){
//         width: 100%;
//         height: 80px;

//     };

// `;

export const Img = styled.img`
  margin-right: 15px;

  @media screen and (max-width: 768px) {
    height: 80px;
    width: 80px;
  }
`;

export const H1 = styled.h1`
  font-size: 20px;

  @media screen and (max-width: 575px) {
    font-size: 18px;
    padding: 20px 0px;
    background: #242C42;
    color: #fff;
    font-weight: 600;
    text-align: center;
  }
`;

export const H2 = styled.h2`
  font-size: 18px;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const P = styled.p`
  color: grey;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
