import axios from "axios";
import { useState, useEffect } from "react";
import { Table } from "../Share/ShareTable/Table";
import { toast } from "react-toastify";


export const Achivement = () => {
  const [allAchivement, setAllAchivement] = useState([]);

  const getAllAchivement = async () => {
    const res = await axios
      .get("/achivements", {
        withCredentials: true,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    console.log(data);
    return data;
  };

  useEffect(() => {
    getAllAchivement().then((data) => setAllAchivement(data));
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("are you sure to delete?")) {
      await axios
        .delete(`/delete/achivement/${id}`)
        .then((res) => {
          toast.success("Deleted Successfully.", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          getAllAchivement().then((data) => setAllAchivement(data));
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <Table
        title="All Achivement"
        link="create-achivement"
        data={allAchivement}
        handleDelete={handleDelete}
      />
    </>
  );
};
