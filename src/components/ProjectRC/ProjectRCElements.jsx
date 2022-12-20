import styled from 'styled-components'

export const Section = styled.div`
 padding: 0 150px;


`;
export const H2 = styled.h1`
    font-size: 24px;
  letter-spacing: 3px;
  &:before {
    content: "";
    width: 900px;
    height: 3px;
    background-color: gray;
    position: absolute;
    top: 15px;
    left: 30%;
  }
  &:after {
    content: "";
    width: 250px;
    height: 6px;
    background-color: #000000;
    position: absolute;
    top: 13px;
    left: 30%;
  }
`;