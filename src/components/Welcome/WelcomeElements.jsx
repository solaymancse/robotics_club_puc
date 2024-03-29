import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin: 50px 0;

  @media (min-width: 320px) and (max-width: 1023px) {
    flex-direction: column;
  }
`;
export const Left = styled.div`
  flex: 1;
  text-align: center;

  img {
    width: 200px;
    height: 200px;
  }

  @media (min-width: 575px) and (max-width: 1023px) {
    margin-bottom: 20px;
    img {
      width: 120px;
      height: 120px;
    }
  }
  @media (min-width: 320px) and (max-width: 575px) {
    margin-bottom: 20px;
    img {
      width: 100px;
      height: 100px;
    }
  }
`;
export const Right = styled.div`
  flex: 3;
  position: relative;
`;

export const Span = styled.span`
  font-size: 48px;
  letter-spacing: 3px;
  &:before {
    content: "";
    width: 480px;
    height: 3px;
    background-color: gray;
    position: absolute;
    top: 35px;
    right: 0;
  }
  &:after {
    content: "";
    width: 170px;
    height: 6px;
    background-color: #000000;
    position: absolute;
    top: 33.5px;
    left: 50%;
  }

  @media (min-width: 1024px) and (max-width: 1399px) {
    font-size: 18px;
    &:before {
    content: "";
    width: 100%;
    height: 3px;
    background-color: gray;
    position: absolute;
    top: 35px;
    right: 0;
  }
    &:after {
      content: "";
      width: 170px;
      height: 6px;
      background-color: #000000;
      position: absolute;
      top: 33.5px;
      left: 0%;
    }
  }
  @media (min-width: 481px) and (max-width: 1023px) {
    font-size: 18px;
    &:before {
    content: "";
    width: 100%;
    height: 3px;
    background-color: gray;
    position: absolute;
    top: 35px;
    right: 0;
  }
    &:after {
      content: "";
      width: 170px;
      height: 6px;
      background-color: #000000;
      position: absolute;
      top: 33.5px;
      left: 0%;
    }
  }
  @media (min-width: 320px) and (max-width: 480px) {
    &:before {
    content: "";
    width: 300px;
    height: 3px;
    background-color: gray;
    position: absolute;
    top: 35px;
    left: 0;
  }
    &:after {
      content: "";
      width: 170px;
      height: 6px;
      background-color: #000000;
      position: absolute;
      top: 33.5px;
      left: 0%;
    }
  }
  @media screen and (max-width: 575px) {
    font-size: 20px;
  }
`;

export const Intro = styled.div`
  font-size: 18px;
  color: grey;
  text-align: justify;
  width: 100%;
  margin-top: 30px;
  @media (min-width: 768px) and (max-width: 1440px) {
    padding: 0px;
    font-size: 14px;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    padding: 0px;
    font-size: 12px;
  }
`;
