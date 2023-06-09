import { Container, Middle, LeftDiv, RightDiv } from "./MessageElements";
import { AdviserMessage } from "./AdviserMessage";
import { ChairmanMessage } from "./ChairmanMessage";
import { DeanMessage } from "./DeanMessage";
import { VcMessage } from "./VcMessage";
import { ChiefMentor } from "./ChiefMentor";
import { Mentor1 } from "./Mentor1";
import { Mentor2 } from "./Mentor2";

export const Message = () => {
  return (
    <Container>
      <VcMessage />
      <DeanMessage />
      <ChairmanMessage />
      <Middle>
        <LeftDiv>
          <AdviserMessage />
        </LeftDiv>
        <RightDiv>
          <ChiefMentor />
        </RightDiv>
      </Middle>
      <Middle>
        <LeftDiv>
        <Mentor1 />
        </LeftDiv>
        <RightDiv>
          <Mentor2 />
        </RightDiv>
      </Middle>
    </Container>
  );
};
