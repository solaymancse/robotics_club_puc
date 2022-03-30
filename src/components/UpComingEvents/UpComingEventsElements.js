import styled from "styled-components";

export const Section = styled.section`
 
  width: 100%;
  padding-right: 20px;
  height: 700px;

  @media (min-width: 320px) and (max-width: 480px) {
    padding: 0px;
    height: 1500px;
    
  };
`;

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  @media (min-width: 320px) and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    
  };
`;
export const ContentDiv = styled.div`
  display: flex;
  margin-top: 20px;
  
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Left = styled.div`
  border-bottom: 2px solid #333;
  height: 50px;
  margin-right: 20px;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 100%;

  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
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
  height: 300px;
  width: 100%;

  @media screen and (max-width: 575px) {
    width: 100%;
  }
`;

export const H1 = styled.h1`
  font-size: 20px;

  @media screen and (max-width: 575px) {
    font-size: 18px;
    padding: 20px 0px;
    background: #242c42;
    color: #fff;
    font-weight: 600;
    text-align: center;
  }
`;

export const H2 = styled.h2`
  font-size: 18px;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
export const H3 = styled.h3`
  font-size: 20px;

 
`;

export const P = styled.p`
  color: grey;

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
