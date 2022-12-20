import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
background: #667db6;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
width: 100%;
height: 300px;
`
export const Div = styled.div`
display: flex;
justify-content: space-between;
`
export const Left = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
justify-content: center;
flex:1;
p{
    color: #fff;
    
}
`
export const Button = styled.div`
input{
    border: none;
    width: 300px;
    padding: 5px;
    outline: none;
}

button{
    padding: 5px 8px;
    border: none;
    color: #fff;
    background-color:#ff2162 ;
   
}
`
export const Right = styled.div`
flex: 1;

img{
    margin-top: -100px;
    width: 500px;
   height: 400px;
   float: right;
}

`