import { CardDiv, P, ImgDiv } from "./ExeCommitteeElements";

export const Card = ({ data, width, gap }) => {
  return (
    <CardDiv width={width} gap={gap}>
      <ImgDiv>
        <img src={data.img} alt="" />
      </ImgDiv>
      <P>{data.name}</P>
      <P>{data.role}</P>
      <P>{data.desig}</P>
    </CardDiv>
  );
};
