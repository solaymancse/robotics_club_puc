import { Section ,Title} from "../Acheivement/AcheivementElements";
import { FlexBox } from "./SeminerWorkshopElements";
import Data from "../../SeminerWorkshopData";
import { SeminerWorkshopCard } from "./SeminerWorkshopCard";
import { H1 } from "../ExeCommittee/ExeCommitteeElements";


export const SeminerWorkshop = () => {
  return (
    <Section>
     <Title>
     <H1>Seminer & Workshop</H1>
     </Title>
      <FlexBox>
        {Data.map((data,index) => (
          <SeminerWorkshopCard key={index} date={data.date} title={data.title} />
        ))}
      </FlexBox>
    </Section>
  );
};
