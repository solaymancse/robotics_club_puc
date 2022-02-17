import styled from 'styled-components'

export const Section = styled.div`
    border-top: 1px solid lightgray;
    padding: 20px 150px 30px 150px;

    @media screen and (max-width: 575px){
     width: 100%;
     padding: 10px;
    }

`;

export const Div = styled.div`
    margin-top: 30px;



`;

export const Img = styled.img`
    height: 300px;
    width: 385px;
    margin-right: 15px;
    margin-bottom: 10px;

    @media screen and (max-width: 575px){
        width: 100%;
    }


`;

export const H1 = styled.h1`
    font-size: 24px;
    font-family: 'EB Garamond', serif;
   


`;