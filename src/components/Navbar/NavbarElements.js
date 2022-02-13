import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav `
    background: #fff;
    padding-left: 150px;
    padding-right: 150px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    height: 100px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw-1000px) / 2);
    transition: 0.6s;
    z-index:10;
    position: sticky;
    top: 0;
    transition: all 0.2s ease-in-out;

    @media screen and (max-width: 768px) {
        margin-left: 0;
        height: 70px;
        padding: 0;
    }

    @media screen and (max-width: 1024px) {
        margin-left: 0;
        height: 100px;
        padding: 10px 20px;
    }

`;

export const NavLink = styled(Link)`
    color: #333;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    

    &.active {
        color:  #27363B;
        border-bottom: 2px solid  #27363B;
        transition: all 0.2s ease-in-out;
        
    }

    &:hover {
        color: red;
    }
`;

export const Image = styled.img`
    width: 100px;
    height: 100px;

    @media screen and (max-width: 768px){
        height: 50px;
        width: 50px;
        margin-left: 20px;
    }

    @media screen and (max-width: 1024px) {
        width: 80px;
        height: 80px;
    }
`;

export const H1 = styled.h1`
    font-size: 30px;
    font-weight: bold;
    color:  #27363B;
  
    @media screen and (max-width: 768px) {
        font-size: 16px;

    };

    @media screen and (max-width: 1024px) {
        font-size: 24px;
    };

`;
export const SPAN = styled.span`
    letter-spacing: 5.2px;

    @media screen and (max-width: 768px){
        letter-spacing: 2px;
    };

    @media screen and (max-width: 1024px) {
        letter-spacing: 3.5px;
    };
    
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #333;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
       
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    padding: 10px 22px;
    color: #fff;
    background: #27363B;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #C70039;
        color: #fff;
        
    }
`;

export const Div = styled.div`
    display: flex;
    align-items: center;
   
   @media screen and (max-width: 768px){
    margin-top: 10px;
   }
`;