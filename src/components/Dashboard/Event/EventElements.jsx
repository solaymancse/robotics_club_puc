import styled from "styled-components";

export const Top = styled.div`
display: flex;
justify-content: space-between;

a{
    text-decoration: none;
    background-color: #10CEB1;
    border: 0.5px solid #10CEB1;
    color: #fff;
    padding: 2px 5px;

    &:hover{
        background-color: #fff;
        color: #333;
        transition: all 0.5s ease-in;
    }
}

`

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
gap: 50px;

img{
    width: 100%;
    height: 500px;
}

input{
    padding: 5px;
}
`