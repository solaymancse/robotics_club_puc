import "../Dashboard";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Top } from "../Event/EventElements";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
axios.defaults.withCredentials = true;

export const Notices = () => {
  const [allnotice, setAllNotice] = useState([]);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState("");

  const getAllNotice = async () => {
    try {
      const res = await axios.get('/all-notices');
      return res.data;
  
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (value)=> {
    console.log(value);
  }

  useEffect(() => {
    getAllNotice()
      .then((data) => setAllNotice(data))
      .catch((err) => console.log(err));
  }, [page]);
console.log(page);
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure want to Delete?")) {
      await axios.delete(`/notice/${id}`).then((res) => {
        toast.success("Successfully Deleted.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        getAllNotice().then((data) => setAllNotice(data));
      });
    }
  };

  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <Top>
                  <h4>All Notice</h4>
                  <Link to="/dashboard/create-notice">
                    <IoIosAddCircleOutline size="35px" />
                  </Link>
                </Top>
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th> SL No. </th>
                        <th> Title </th>
                        <th> Updated Date </th>
                        <th> Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allnotice.map((data, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{data.title}</td>

                          <td>{new Date(data.updatedAt).toDateString()}</td>
                          <td>
                            <Link
                              className="badge badge-gradient-success"
                              to={`/dashboard/notice/update/${data._id}`}
                            >
                              Update
                            </Link>
                          </td>
                          <td>
                            <label
                              className="badge badge-gradient-danger"
                              onClick={() => handleDelete(data._id)}
                            >
                              Delete
                            </label>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <Stack spacing={2}>
                    <Pagination
                      count={pages}
                      onChange={(e,value)=> handleChange(value)}
                    />
                  </Stack>
                  <ToastContainer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
