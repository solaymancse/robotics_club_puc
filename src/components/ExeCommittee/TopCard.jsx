import { TopCardDiv, P, ImgDiv } from "./ExeCommitteeElements";

export const TopCard = ({ data, width, gap }) => {
  return (
    <TopCardDiv width={width} gap={gap} data-aos="zoom-in">
      <ImgDiv>
        <img src={data.img} alt="" />
      </ImgDiv>
      <P>{data.name}</P>
      <P>{data.role}</P>
      <P>{data.desig}</P>
    </TopCardDiv>
  );
};
