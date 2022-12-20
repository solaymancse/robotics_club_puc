import { Section ,Title} from "../Acheivement/AcheivementElements";
import { FlexBox,H1 } from "./SeminerWorkshopElements";
import Data from "../../SeminerWorkshopData";
import { SeminerWorkshopCard } from "./SeminerWorkshopCard";



export const SeminerWorkshop = () => {
  return (
    <Section>
     <Title>
     <H1>Seminer & Workshop</H1>
     <a href="/all">View All</a>
     </Title>
      <FlexBox>
        {Data.map((data,index) => (
          <SeminerWorkshopCard key={index} date={data.date} title={data.title} />
        ))}
      </FlexBox>
    </Section>
  );
};
