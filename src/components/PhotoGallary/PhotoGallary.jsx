import { Wrapper } from "./GallaryElements";
import { Title } from "../Acheivement/AcheivementElements";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { H2 } from "../SeminerWorkshop/SeminerWorkshopElements";
import {
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';
import axios from "axios";
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
      <MDBRow>
      <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
        <img
          src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Boat on Calm Water'
        />

        <img
          src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Wintry Mountain Landscape'
        />
      </MDBCol>

      <MDBCol lg={4} className='mb-4 mb-lg-0'>
        <img
          src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Mountains in the Clouds'
        />

        <img
          src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Boat on Calm Water'
        />
      </MDBCol>

      <MDBCol lg={4} className='mb-4 mb-lg-0'>
        <img
          src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Waves at Sea'
        />

        <img
          src='https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp'
          className='w-100 shadow-1-strong rounded mb-4'
          alt='Yosemite National Park'
        />
      </MDBCol>
    </MDBRow>

    </Wrapper>
  );
};
