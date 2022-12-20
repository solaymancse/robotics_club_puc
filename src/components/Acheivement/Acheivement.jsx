import React from "react";
import {
  Section,
  Img,
  Div,
  Title,
  H2,
  TitleOverlay,
  Content,
} from "./AcheivementElements";
import { achivementData } from "../../Data";

export const Acheivement = () => {
  return (
    <Section>
      <Title>
        <H2>Acheivement</H2>
        <a href="/all">View All</a>
      </Title>

      <Div >
      {achivementData.map((data, index) => (
        <Content key={index}>

          <img src={data.img} alt="" />
          <TitleOverlay>
            <p>{data.title}</p>
          </TitleOverlay>
        </Content>
      ))}
      </Div>
    </Section>
  );
};
