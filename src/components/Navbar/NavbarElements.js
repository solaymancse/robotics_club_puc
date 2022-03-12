import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  height: 90px;
  top: 0;
  position: sticky;
  z-index: 10;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw-1000px) / 2);
  transition: all 0.2s ease-in-out;
  width: 100%;
  text-align: center;
  align-items: center;
  

  @media (min-width: 481px) and (max-width: 767px) {
    padding: 0 50px;
    height: 70px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    padding: 0 20px;
    margin: 0;
    height: 70px;
  } ;
`;

export const NavLink = styled(Link)`
  color: #333;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1rem 2rem 1rem 0;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: red;
    border-bottom: 1px solid #333;
    transition: 0.5s;
    
  }
  &.active {
    color: #27363b;
    border-bottom: 2px solid #27363b;
    transition: all 0.2s ease-in-out;
  
  }
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;

  @media screen and (max-width: 575px) {
    width: 50px;
    height: 50px;
  } ;
`;

export const H1 = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #27363b;

  @media screen and (max-width: 575px) {
    font-size: 16px;
  } ;
`;
export const SPAN = styled.span`
  letter-spacing: 5.2px;

  @media screen and (max-width: 575px) {
    letter-spacing: 2.5px;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #333;

  @media screen and (max-width: 575px) {
    margin: auto 20px;
    font-size: 18px;
    display: block;
  } ;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 575px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 575px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  padding: 10px 22px;
  color: #fff;
  background: #27363b;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #c70039;
    color: #fff;
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 575px) {
    margin-top: 10px;
  }
`;
