import "../Dashboard";
import axios from "axios";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Top } from "../Event/EventElements";
import { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Table } from "../Share/ShareTable/Table";
axios.defaults.withCredentials = true;

export const Seminer = () => {
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
    getSeminer().then((data) => setAllSeminer(data));
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure want to Delete?")) {
      await axios.delete(`/seminer/delete/${id}`).then((res) => {
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
        getSeminer().then((data) => setAllSeminer(data));
      });
    }
  };

  return (
    <>
      <Table title="All Seminer" data={seminer} link="create-seminer"/>
    </>
  );
};
