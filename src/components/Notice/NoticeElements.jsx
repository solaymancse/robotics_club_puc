import styled from "styled-components";

export const Wrapper = styled.div`
padding: 50px 0;
`
export const Top = styled.div`
display: flex;
justify-content: space-between;
position: relative;
align-items: center;
margin-bottom: 30px;

a{
    background-color: #ff2162;
    text-decoration: none;
    padding: 5px 10px;
    color: #fff;
    
    &:hover{
        background-color: #fff;
        color: #333;
        border: 0.5px solid lightgray;
       
    }
}

`
export const Title = styled.h1`
  font-size: 40px;
  letter-spacing: 3px;
  &:before{
    content: '';
    width: 580px;
    height: 3px;
    background-color: gray;
    position: absolute;
    top: 25px;
    left: 220px;
    
  }
  &:after{
    content: '';
    width: 190px;
    height: 6px;
    background-color: #000000;
    position: absolute;
    top: 24px;
    left: 220px;
    
  }
 
  @media screen and (max-width: 575px) {
    font-size: 20px;
    &:before{
    content: '';
    width: 180px;
    height: 3px;
    background-color: gray;
    position: absolute;
    top: 25px;
    left: 0px;
    
  }
  &:after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #000000;
    position: absolute;
    top: 24px;
    left: 0px;
    
  }
  }
`;
export const Bottom = styled.div`
border-bottom: 0.5px solid #000000;
padding: 20px 0px;
h2{
    font-weight: 600;
    font-size: 22px;

}

`
export const More = styled.div`
color: #607EB7;
display: flex;
align-items: center;
gap: 10px;

&:hover{
    text-decoration: underline;
}

a{
    text-decoration: none;
}

`