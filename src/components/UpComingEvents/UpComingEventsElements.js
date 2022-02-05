import styled from 'styled-components'

export const Section = styled.section`
    
    width: 70%;
    height: 700px;
    
    @media screen and (max-width: 768px){
        width: 100%;
        height: 520px;
    }


`;

export const Div = styled.div`
    display: flex;
    margin-bottom: 10px;

    @media screen and (max-width: 768px){
        width: 100%;
        height: 80px;
        
    }
   


`;

export const Img = styled.img`
    margin-right: 15px;

    @media screen and (max-width: 768px){

        height: 80px;
        width: 80px;
    }


`;

export const H1 = styled.h1`
    font-size: 20px;

    @media screen and (max-width: 768px){
        font-size: 18px;
    }

`;

export const H2 = styled.h2`
    font-size:18px;

    @media screen and (max-width: 768px){
        font-size: 16px;
    }


`;

export const P = styled.p`
     color:grey;
     

     @media screen and (max-width: 768px){
         font-size: 12px;
     }

`;