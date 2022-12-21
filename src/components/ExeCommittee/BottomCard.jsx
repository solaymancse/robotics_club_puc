import { BottomCardDiv, P, ImgDiv } from "./ExeCommitteeElements";

export const BottomCard = ({ data, width, gap }) => {
  return (
    <BottomCardDiv width={width} gap={gap}>
      <ImgDiv>
        <img src={data.img} alt="" />
      </ImgDiv>
      <P>{data.name}</P>
      <P>{data.role}</P>
      <P>{data.desig}</P>
    </BottomCardDiv>
  );
};
