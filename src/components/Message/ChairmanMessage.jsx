import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import img9 from "../../images/image9.jpg";
import {
  ImgDiv,
  LeftSide,
  RightSide,
  Title2,
  Wrapper,
  H2,
  MainDiv,
  Qoute,
} from "./MessageElements";
export const ChairmanMessage = () => {
  return (
    <Wrapper>
      <Title2>Honorable Chairman Of EEE</Title2>
      <MainDiv data-aos="fade-left">
        <LeftSide>
          <ImgDiv>
            <img src={img9} alt="" />
          </ImgDiv>
          <H2>
            Tuton Chandra Mallick <br />
            Associate Professor & Chairman <br />
            Department of EEE
          </H2>
        </LeftSide>
        <RightSide>
          <Qoute>
            <FaQuoteLeft />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book.
            <FaQuoteRight />
          </Qoute>
        </RightSide>
      </MainDiv>
    </Wrapper>
  );
};
