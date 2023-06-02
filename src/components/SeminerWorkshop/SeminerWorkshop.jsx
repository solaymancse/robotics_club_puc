import { Section ,Title} from "../Acheivement/AcheivementElements";
import { FlexBox,H2} from "./SeminerWorkshopElements";
import { SeminerWorkshopCard } from "./SeminerWorkshopCard";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";



export const SeminerWorkshop = () => {
  const [seminer, setAllSeminer] = useState([]);

  const getSeminer = async () => {
    const res = await axios
      .get("/seminers", {
        withCredentials: true,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
 
    return data;
  };

  useEffect(() => {
    getSeminer().then((data)=> setAllSeminer(data));
 
  }, []);
  return (
    <Section>
     <Title>
     <H2>Seminer & Workshop</H2>
     <Link to="/all-seminer">View All</Link>
     </Title>
      <FlexBox>
        {seminer?.map((data,index) => (
          <SeminerWorkshopCard key={index} data={data} />
        ))}
      </FlexBox>
    </Section>
  );
};
