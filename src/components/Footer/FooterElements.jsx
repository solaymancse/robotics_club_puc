import styled from "styled-components";
import { FaFacebook, FaTwitterSquare, FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { BsFillArrowRightCircleFill } from "react-icons/bs";


export const Section = styled.section`
padding: 50px 300px 50px 300px;
  background: #252525;
  height: 500px;

  @media screen and (max-width: 575px){
    padding:30px 10px;
    width: 100%;
   height: 100%;
  }
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
  color: #fff;
  text-decoration: none;
  

  &:hover {
    color: #900C3E;
    transition: transformX(0.5);
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
`;

export const Youtube = styled(AiOutlineYoutube)`
    color: #cd201f;
    font-size: 40px;
    background: #fff;
    padding: 10px;
    border-radius: 50%;

    &:hover {
        background: #cd201f;
        transition: all 0.2s ease-in;
        color: #fff;
    }
`;

export const Facebook = styled(FaFacebook)`
  color: #1877f2;
  font-size: 40px;
  background: #fff;
  padding: 10px;
  border-radius: 50%;

  &:hover {
        background: #1877f2;
        transition: all 0.2s ease-in;
        color: #fff;
    }
`;
export const Square = styled(FaTwitterSquare)`
  color: #1da1f2;
  font-size: 40px;
  background: #fff;
  padding: 10px;
  border-radius: 50%;

  &:hover {
        background: #1da1f2;
        transition: all 0.2s ease-in;
        color: #fff;
    }
`;
export const Instagram = styled(FaInstagram)`
  color: #e4405f;
  font-size: 40px;
  background: #fff;
  padding: 10px;
  border-radius: 50%;

  &:hover {
        background: #e4405f;
        transition: all 0.2s ease-in;
        color: #fff;
    }
`;

export const ArrowRight = styled(BsFillArrowRightCircleFill)`
    margin-right: 10px;


`;