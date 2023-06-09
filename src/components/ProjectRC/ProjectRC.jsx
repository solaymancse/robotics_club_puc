
import {
  Section,
  Div,
  Title,
  TitleOverlay,
  Content,

} from "../Acheivement/AcheivementElements";
import axios from "axios";
import { useState ,useEffect} from "react";
import { Link } from "react-router-dom";
import { H2 } from "./ProjectRCElements";


export const ProjectRC = () => {
  const [allProject, setAllProject] = useState([]);

  const getAllAchivement = async () => {
    const res = await axios
      .get("/limit-prc", {
        withCredentials: true,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };

  useEffect(() => {
  getAllAchivement().then((data) => setAllProject(data));
  }, []);
  return (
    <Section>
      <Title>
        <H2>Projects , Research & Collaborations</H2>
        <Link to="/all-project">View All</Link>
      </Title>

      <Div >
      {allProject.map((data, index) => (
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
