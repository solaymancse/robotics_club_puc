import styled from "styled-components";

export const Top = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: #10ceb1;
    font-weight: 800;
    padding: 2px 5px;

    &:hover {
      color: #333;
      transition: all 0.5s ease-in;
      border: none;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  img {
    width: 100%;
    height: 500px;
  }

  input {
    padding: 5px;
  }
`;
export const Button = styled.button`
  background-color: ${(props) => props.background};
  color: #fff;
  border: 1px solid #10ceb1;
  padding: 5px;

  
`;
export const Container = styled.div`
  display: flex;
`;
export const Left = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
