import { CardDiv, Name, Role, Desig, ImgDiv } from "./ExeCommitteeElements";

export const Card = ({ data, width, gap }) => {
  return (
    <CardDiv width={width} gap={gap}>
      <ImgDiv>
        <img src={data.img} alt="" />
      </ImgDiv>
      <Name>{data.name}</Name>
      <Role>{data.role}</Role>
      <Desig>{data.desig}</Desig>
    </CardDiv>
  );
};
