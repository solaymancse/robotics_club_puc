import "../Dashboard";
import avatar from "../../../images/face1.jpg";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
axios.defaults.withCredentials = true;

export const Tables = () => {
  const [members, setMembers] = useState([]);
  console.log(members);
  const getMembers = async () => {
    const res = await axios
      .get("http://localhost:5000/api/all-member", {
        withCredentials: true,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    console.log(data);
    return data;
  };

  useEffect(() => {
    getMembers().then((data) => setMembers(data));
  }, []);
  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">All Members</h4>
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th> Avatar </th>
                        <th> Name </th>
                        <th> Department </th>
                        <th> Register Date</th>
                        <th> Status </th>
                        <th> Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {members.map((data, index) => (
                        <tr key={index}>
                          <td>
                            <img src={avatar} className="me-2" alt="image" />
                            {data.name}
                          </td>
                          <td> {data.department} </td>

                          <td> {data.phone} </td>
                          <td>{data.gender} </td>
                          <td>
                            <label className="badge badge-gradient-success">
                              DONE
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
  );
};
