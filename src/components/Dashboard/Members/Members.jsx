import axios from 'axios';
import {useState,useEffect} from 'react'
import { Table } from '../Share/ShareTable/Table'

export const Members = () => {
  const [members, setMembers] = useState([]);

  const getMembers = async () => {
    const res = await axios
      .get("/all-member", {
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
                      <th> Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {members.map((data, index) => (
                      <tr key={index}>
                        <td>
                          <img src={data.image} className="me-2" alt="image" />
                        </td>
                        <td> {data.name} </td>
                        <td> {data.department} </td>
                        <td> {new Date(data.createdAt).toDateString()} </td>
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
  )
}
