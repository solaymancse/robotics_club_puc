import {H2} from "./ProjectRCElements";
import {
  Section,
  Div,
  Title,
  TitleOverlay,
  Content,
} from "../Acheivement/AcheivementElements";
import { achivementData } from "../../Data";

export const ProjectRC = () => {
  return (
    <Section>
      <Title>
        <H2>Projects , Research & Collaborations</H2>
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
