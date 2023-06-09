import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #031635;
    height: 30px;
    width: 100%;
    align-items:center;
    padding: 5px 0;

    @media (min-width: 320px) and (max-width: 480px){
      height: 50px;
    }
    @media  (max-width: 767px){
      display: none;
    }

`
export const Div = styled.div`
  display: flex;
align-items: center;
text-align: center;
justify-content: space-around;
a{
    font-weight: normal;
    font-size: 14px;
    color: gray;
    text-decoration: none;
    padding-right: 10px;
    border-right: 1px solid #fff;
   display: flex;
   align-items: center;

    &:hover{
      text-decoration: underline;
    }
}

`