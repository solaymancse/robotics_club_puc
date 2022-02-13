import styled from 'styled-components'

export const Section = styled.section`
  height: 450px;
  padding: 30px 150px 30px 150px;
  display: flex;
  text-align: center;
  justify-content: space-around;
 
  
 
  @media screen and (max-width: 768px) {
    height: 550px;
    width: 100%;
    margin: 0;
    padding-left: 20px;
    padding-right: 20px;
    justify-content: space-around;
    flex-direction: column;
  }


`;
export const Div = styled.div`
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    height: 350px;
    width: 450px;
    padding: 20px;
    border-radius: 5px;
    background: #fff;

    @media screen and (max-width: 768px){
        width:100%;
        height: 300px;
        margin-bottom: 10px;
    }


`;

export const Img = styled.img`
    border-radius: 50%;
    height: 100px;
    width: 100px;

    @media screen and (max-width: 768px){
        height: 100px;
        width: 100px;
    }



`;

export const P = styled.p`
    color: grey;
    text-align: justify;

    @media screen and (max-width: 768px){
        font-size: 14px;
    }

`;

export const LDiv = styled.div`
    display: flex;
    justify-content: space-around;
    text-align: center;
    margin-top: 40px;

`;