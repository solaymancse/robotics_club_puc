import { AiFillHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import "./Dashboard.css";
import {useState, useEffect} from 'react';
import axios from 'axios'

export const MainPanel = () => {
const [members, setMembers] = useState();


useEffect( async ()=> {
  await axios.get('/all-member').then((res)=> setMembers(res.data)).catch((err)=>console.log(err));
},[])


  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="page-header">
          <h3 className="page-title ">
            <span className="page-title-icon bg-gradient-primary text-white me-2">
             <AiFillHome/>
            </span>
            Dashboard
          </h3>
          <nav aria-label="breadcrumb">
            <ul className="breadcrumb">
              <li className="breadcrumb-item active" aria-current="page">
                <span></span>Overview{" "}
                <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
              </li>
            </ul>
          </nav>
        </div>
        <div className="row">
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card bg-gradient-danger card-img-holder text-white">
              <div className="card-body">
                <h4 className="font-weight-normal mb-3">
                 Total Members{" "}

                </h4>
                <h2 className="mb-5"></h2>
                <h6 className="card-text">Increased by 60%</h6>
              </div>
            </div>
          </div>
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card bg-gradient-info card-img-holder text-white">
              <div className="card-body">
                <h4 className="font-weight-normal mb-3">
                 Total Event{" "}
                  <i className="mdi mdi-bookmark-outline mdi-24px float-right"></i>
                </h4>
                <h2 className="mb-5">45,6334</h2>
                <h6 className="card-text">Decreased by 10%</h6>
              </div>
            </div>
          </div>
          <div className="col-md-4 stretch-card grid-margin">
            <div className="card bg-gradient-success card-img-holder text-white">
              <div className="card-body">
                <h4 className="font-weight-normal mb-3">
                  Visitors Online{" "}
                  <i className="mdi mdi-diamond mdi-24px float-right"></i>
                </h4>
                <h2 className="mb-5">95,5741</h2>
                <h6 className="card-text">Increased by 5%</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Recent New Member Register</h4>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th> Photo </th>
                        <th> Department </th>
                        <th> Register Date </th>
                        <th> Fee </th>
                      </tr>
                    </thead>
                    <tbody>
                      {members?.map((data,index)=> (
                        
                        <tr key={index}>
                          
                        <td>
                          <img
                            src={data.image}
                        
                            className="me-2"
                            alt="image"
                          />
                         {data.name}
                        </td>
                        <td> Fund is not recieved </td>
                        <td> {new Date(data.createdAt).getMonth()}</td>
                        <td>
                          {data.paid == 0 ? <label className="badge badge-gradient-danger">
                            unpaid
                          </label>
                        :  <label className="badge badge-gradient-success">
                        paid
                      </label>
                        }
                          
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
        <div className="row">
          <div className="col-md-7 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="clearfix">
                  <h4 className="card-title float-left">
                    Visit And Sales Statistics
                  </h4>
                  <div
                    id="visit-sale-chart-legend"
                    className="rounded-legend legend-horizontal legend-top-right float-right"
                  ></div>
                </div>
                <canvas id="visit-sale-chart" className="mt-4"></canvas>
              </div>
            </div>
          </div>
          <div className="col-md-5 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Traffic Sources</h4>
                <canvas id="traffic-chart"></canvas>
                <div
                  id="traffic-chart-legend"
                  className="rounded-legend legend-vertical legend-bottom-left pt-4"
                ></div>
              </div>
            </div>
          </div>
        </div>
  
 

      </div>
    </div>
  );
};
