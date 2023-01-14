import "../Dashboard";
import {IoIosAddCircleOutline} from 'react-icons/io'
import {Top } from './EventElements'
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {toast}  from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
axios.defaults.withCredentials = true;


export const Event = () => {
  const [allevents, setAllEvents] = useState([]);

  const getMembers = async () => {
    const res = await axios
      .get("/all-events", {
        withCredentials: true,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };

  useEffect(() => {
    getMembers().then((data) => setAllEvents(data));
  }, []);

  const handleDelete = async (id)=> {
    if(window.confirm("Are you sure want to Delete?")){
      await axios.delete(`/${id}`).then((res)=>{
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
        getMembers().then((data) => setAllEvents(data));
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
                <h4>All Events</h4>
                <Link to="/dashboard/create-event"><IoIosAddCircleOutline size="35px"/></Link>
                </Top>
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th> Image </th>
                        <th> Title </th>
                        <th> Created Date </th>
                        <th> Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allevents.map((data, index) => (
                        <tr key={index}>
                          <td>
                            <img src={data.image} className="me-2"/>
                            
                          </td>
                       <td>{data.title}</td>

                          <td>{new Date(data.createdAt).toDateString()}</td>
                          <td>
                            <label className="badge badge-gradient-success">
                              Update
                            </label>
                          </td>
                          <td>
                            <label className="badge badge-gradient-danger" onClick={()=>handleDelete(data._id)}>
                              Delete
                            </label>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}