import "../../Dashboard.css";
import { IoMdTrash,IoIosAddCircleOutline } from "react-icons/io";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

export const Table = ({ data, title, handleDelete,link }) => {
  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <Tooltip title="add">
                  <Link to={`/dashboard/${link}`}><IconButton>
                    <IoIosAddCircleOutline color="primary"/>
                  </IconButton></Link>
                </Tooltip>
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th> Image </th>
                        <th> Title </th>
                        <th> Created Date</th>
                        <th> Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((data, index) => (
                        <tr key={index}>
                          <td>
                            <img
                              src={data.image}
                              className="me-2"
                              alt="image"
                            />
                          </td>
                          <td> {data.title} </td>

                          <td>{new Date(data.createdAt).toDateString()} </td>
                          <td>
                            <Tooltip
                              title="Delete"
                              color="error"
                              onClick={() => handleDelete(data._id)}
                            >
                              <IconButton>
                                <IoMdTrash />
                              </IconButton>
                            </Tooltip>
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
