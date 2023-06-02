import {
  Section,
  Div,
  Title,
  H2,
  TitleOverlay,
  Content,
} from "./AcheivementElements";

import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Acheivement = () => {
  const [allAchivement, setAllAchivement] = useState([]);

  const getAllAchivement = async () => {
    const res = await axios
      .get("/limit-achivement", {
        withCredentials: true,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
   
    return data;
  };

  useEffect(() => {
  getAllAchivement().then((data) => setAllAchivement(data));
  }, []);
  return (
    <Section>
      <Title>
        <H2>Acheivement</H2>
        <Link to="/all-achivement">View All</Link>
      </Title>

      <Div >
      {allAchivement.map((data, index) => (
        <Content key={index}>

          <img src={data.image} alt="" />
          <TitleOverlay>
            <p>{data.title}</p>
          </TitleOverlay>
        </Content>
      ))}
      </Div>
    </Section>
  );
};
