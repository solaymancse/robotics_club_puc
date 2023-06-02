import { Container, Middle, LeftDiv, RightDiv } from "./MessageElements";
import { AdviserMessage } from "./AdviserMessage";
import { ChairmanMessage } from "./ChairmanMessage";
import { DeanMessage } from "./DeanMessage";
import { VcMessage } from "./VcMessage";

export const Message = () => {
  return (
    <Container>
      <VcMessage />
      <DeanMessage />
      <Middle>
        <LeftDiv>
          <ChairmanMessage />
        </LeftDiv>
        <RightDiv>
          <AdviserMessage />
        </RightDiv>
      </Middle>
      <Middle>
        <LeftDiv>
        <AdviserMessage />
        </LeftDiv>
        <RightDiv>
          <AdviserMessage />
        </RightDiv>
      </Middle>
    </Container>
  );
};
