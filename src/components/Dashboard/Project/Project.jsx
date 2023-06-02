import axios from 'axios';
import { useState,useEffect } from 'react';
import '../Dashboard.css'
import { Table } from '../Share/ShareTable/Table'


export const Project = () => {
  const [allProject, setAllProject] = useState([]);

  const getAllAchivement = async () => {
    const res = await axios
      .get("/all-prc", {
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
    <>
    <Table title="All Project and Research" link="create-prc" data={allProject}/>
    </>
  )
}
