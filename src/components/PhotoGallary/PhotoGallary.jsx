import "./gallary.css";
import { Portfolio, Wrapper, Div } from "./GallaryElements";
import { Title } from "../Acheivement/AcheivementElements";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { H2 } from "../SeminerWorkshop/SeminerWorkshopElements";
axios.defaults.withCredentials = true;

export const PhotoGallary = () => {
  const [gallary, setGallary] = useState();

  const getAllPhoto = async () => {
    const res = await axios
      .get("/limit-photos", {
        withCredentials: true,
      })
      .catch((err) => console.log(err));

    const data = await res.data;

    return data;
  };

  useEffect(() => {
    getAllPhoto().then((data) => setGallary(data));
  }, []);

  return (
    <Wrapper>
      <Title>
        <H2>Photo Gallary</H2>
        <Link to="/gallary">View All</Link>
      </Title>
      <Portfolio>
        {gallary &&
          gallary.map((item, index) => (
            <Div key={index}>
              <img src={item.image} alt="" />
              <p>{item.title}</p>
            </Div>
          ))}
      </Portfolio>
    </Wrapper>
  );
};
