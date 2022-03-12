import styled from "styled-components";

export const Section = styled.div`
  height: 900px;
  display: flex;
  text-align: center;
  justify-content: center;
  width: 100%;
  margin-top: 100px;

  @media (min-width: 320px) and (max-width: 480px) {
    margin: 50px 0px 10px 0px;
   
    height: 570px;
   
  } ;
`;

export const Div = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  height: 800px;
  width: 100%;
  padding: 40px;
  background: #fff;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  justify-content: space-between;

  @media (min-width: 320px) and (max-width: 480px) {
    height: 540px;
    width: 100%;
    padding: 20px;
    flex-direction: column;
    
  }
`;

export const Top = styled.div`

  grid-column: 1 / -1;
  padding: 0px 0px 20px;
  
`;
export const Mid = styled.div``;
export const Foot = styled.div`
  margin-top: 50px;
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

  @media (min-width: 320px) and (max-width: 480px) {
    font-size: 14px;
    margin-top: 10px;
    margin-left: auto;
  }
`;
export const Title = styled.div`
  font-size: ${props => props.size};
  

  @media screen and (max-width: 575px) {
    font-size: 16px;
    padding-bottom: 30px;
  }
`;
