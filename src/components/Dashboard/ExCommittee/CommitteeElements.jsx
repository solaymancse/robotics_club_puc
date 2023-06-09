import styled from "styled-components";

export const Right = styled.div`
  width: 90%;
  height: 100%;
  padding: 0px 50px;
  display: flex;
  flex-wrap: wrap;
`;
export const Card = styled.div`
  width: 200px;
  height: 200px;

  img {
    width: 80px;
    height: 80px;
  }
`;
export const Div = styled.div`
  form{
    display: flex;
    flex-direction: column;
  }
`;
export const Left = styled.div`
  flex: 1;
  gap: 10px;
`;
export const Links = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 10px;
`;
export const InputDiv = styled.div`
  flex: 6;
  display: flex;
  margin-top: 20px;
  input {
    margin-right: 20px;
    width: 300px;
    text-align: center;
  }
`;
export const AddButton = styled.button`
  text-align: center;
  border: none;
  padding: 5px 20px;
  background-color: #00405C;
   color: #fff;
  margin-top: 20px;
  width: 150px;

`;
export const Button = styled.button`
  text-align: center;
  border: none;
  padding: 5px 20px;
  background-color: #10ceb1;
  color: #fff;
  margin-top: 20px;

  &:nth-child(2){
    width: 150px;
    background-color: #00405C;
  }
`;
export const Icon = styled.button`
  text-align: center;
  border: none;
  background: none;
  color: red;
`;
export const FormControl = styled.div`
  display: flex;
  gap: 20px;

  button {
    background-color: #10ceb1;
  }
`;
