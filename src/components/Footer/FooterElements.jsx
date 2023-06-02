import styled from "styled-components";
import { BsFillArrowRightCircleFill } from "react-icons/bs";


export const Wrapper = styled.div`
background: #252525;
padding:30px 0px;
 
`;
export const Section = styled.section`

  background: #252525;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Div = styled.div`
  display: flex;
  gap: 10px 30px;
  padding-top: 50px;

 
`;

export const LDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
`;
export const MDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const Img = styled.img`
  height: 100px;
  width: 100px;
`;

export const Links = styled.a`
  color: #777777;
  text-decoration: none;
  font-size: 12px;
  

  &:hover {
    color: #fff;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const H2 = styled.h2`
  color: #fff;
  font-size: 18px;
`;

export const H1 = styled.h1`
  color: #fff;
  font-size: 24px;
  width: 100%;
  line-height: 40px;

  @media screen and (max-width: 575px){
    font-size: 20px;
    line-height: 30px;
  }
`;
export const MiDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  
`;

export const Line = styled.div`
  width: 70px;
  height: 0.5px;
  background: #fff;
`;

export const P = styled.p`
  color: grey;
  text-align: justify;

  @media (max-width: 575px){
    font-size: 14px;
  }
`;

export const RDiv = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px 0px;

  a{
    color: #fff;
    background: #333;
    padding: 10px;
    border-radius: 50%;
    border:2px solid #fff;
    align-items: center;
    display: flex;
  }
`;



export const ArrowRight = styled(BsFillArrowRightCircleFill)`
    margin-right: 10px;


`;