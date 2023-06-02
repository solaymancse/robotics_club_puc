import "../Dashboard";
import { useState } from "react";
import { FaTrash,FaEdit } from "react-icons/fa";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
axios.defaults.withCredentials = true;

export const SessionTable = () => {
  const [sessions, setSessions] = useState([]);

  const getSessions = async () => {
    const res = await axios
      .get("/all-session", {
        withCredentials: true,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    console.log(data);
    return data;
  };

  useEffect(() => {
    getSessions().then((data) => setSessions(data));
  }, []);

  const handleDelete = async (id)=> {
    if(window.confirm("Are you sure to delete")){
      await axios.delete(`/delete-session/${id}`).then((res)=> {
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
          getSessions().then((data) => setSessions(data));
      })
    }
    
  }
  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">All Session</h4>
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th> Session ID </th>
                        <th> Session Year </th>
                        <th> Created At </th>
                        <th> Action </th>
                      </tr>
                    </thead>
                    <tbody>
                      {sessions.map((data, index) => (
                        <tr key={index}>
                          <td>
                           {index + 1}
                          </td>
                          <td> {data.year}</td>
                          <td> {new Date(data.createdAt).toDateString()} </td>
                          <td>
                            <Link className="badge badge-gradient-danger" to="#"  onClick={()=>handleDelete(data._id)}>
                              <FaTrash/>
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
