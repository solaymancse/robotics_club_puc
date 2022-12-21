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
  width: 100%;
  z-index: 10;
  padding: 50px 150px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;

 
  @media (min-width: 992px) and (max-width: 1440px) {
    padding:  0 10px;
   
  } ;
 
  @media (min-width: 481px) and (max-width: 767px) {
    padding: 0px;
    height: 80px;
  } ;
  @media (min-width: 320px) and (max-width: 480px) {
    padding: 0px;
    height: 80px;
  } ;
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 2rem calc((100vw-1000px) / 2);
  transition: all 0.2s ease-in-out;
  width: 100%;
  text-align: center;
  align-items: center;

  @media (min-width: 481px) and (max-width: 767px) {
    padding: 0px 10px;
    margin: 0;
    height: 70px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    padding: 0 20px;
    margin: 0;
    height: 70px;
  } ;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  position: relative;

  @media screen and (max-width: 991px) {
    display: none;
  }
`;
export const Item = styled.div`
  margin-right: 15px;
`;
export const ToggleDiv = styled.div`
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 992px) {
    display: none;
  }
`;

export const Dropdown = styled.div`
  width: 400px;
  height: 180px;
  position: absolute;
  top: 50px;
  background-color: #fff;
  border: 1px solid lightgray;
  display: none;

  a {
    text-decoration: none;
    text-align: start;
    padding: 10px;
    color: #333;
    display: flex;
    flex-direction: column;
    border-bottom: 0.5px solid lightgray;
    transition: 0.5s;

    :nth-child(4) {
      border: none;
    }
  }
  a:hover {
    background-color: #333;
    color: #fff;
  }
`;

export const NavLink = styled(Link)`
  color: #333;
  position: relative;
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-right: 30px;
  padding: 10px 0;
  cursor: pointer;

  &:after {
    content: "";
    background-color: #333;
    width: 0;
    height: 3px;
    left: 0;
    bottom: -10px;
    position: absolute;
    transition: 0.3s;
  }

  &:hover:after {
    width: 100%;
  }
  &.active {
    color: gray;
    border-bottom: 2px solid #27363b;

    transition: all 0.2s ease-in-out;
  }
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  &:hover ${Dropdown} {
    display: block;
  }
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;

  @media screen and (max-width: 991px) {
    width: 50px;
    height: 50px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    width: 40px;
    height: 40px;
  } ;
`;

export const H1 = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #27363b;

  @media (min-width: 992px) and (max-width: 1440px) {
    font-size: 16px;
   
  } ;
  @media (min-width: 320px) and (max-width: 991px) {
    font-size: 12px;
  }
`;
export const SPAN = styled.span`
  letter-spacing: 4.2px;

  @media (min-width: 992px) and (max-width: 1440px) {
    letter-spacing: 2.4px;
   
  } ;
  @media (min-width: 320px) and (max-width: 991px) {
    letter-spacing: 2.2px;
  }
`;

export const Bars = styled(FaBars)`
  color: #333;

  @media screen and (max-width: 575px) {
    margin: auto 20px;
    font-size: 18px;
    display: block;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    margin-right: 10px;
  } ;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-right: 24px;
  border: 0.5px solid lightgray;
  border-radius: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: #ff2162;
  color: #fff;
  transition: 0.7s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    color: #333;
    transition: 0.7s ease-in-out;
  }
  @media screen and (max-width: 575px) {
    display: none;
  }
`;

export const Icon = styled.div``;
export const NavBtnLink = styled(Link)`
  padding: 8px 0px 8px 20px;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;

  &:hover {
    color: #333;
  }
`;

export const Div = styled.div`
  display: flex;

  align-items: center;
  text-align: center;

  @media screen and (max-width: 575px) {
    margin-top: 10px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    gap: 5px;
  }
`;
