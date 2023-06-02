import "../Dashboard";
import { useState, useEffect } from "react";
import axios from "axios";
import { IoIosAddCircle } from "react-icons/io";
import { Div, Img, Card } from "./Element";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
axios.defaults.withCredentials = true;

export const Gallary = () => {
  const [photos, setPhotos] = useState([]);

  const getPhotos = async () => {
    const res = await axios
      .get("/photos", {
        withCredentials: true,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    console.log(data);
    return data;
  };

  useEffect(() => {
    getPhotos().then((data) => setPhotos(data));
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure want to Delete?")) {
      await axios
        .delete(`/delete/photos/${id}`)
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
          getPhotos().then((data) => setPhotos(data));
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">All Photo</h4>
                <Link to="/dashboard/photo/upload">
                  <IoIosAddCircle size="30px" color="red" />
                </Link>
                <Div className="table-responsive">
                  {photos.length > 0 ? (
                    <div style={{display:"flex",gap:"10px"}}>
                      {photos.map((item, index) => (
                        <Card key={index}>
                          <Img>
                            <img src={item.image} alt="" />
                          </Img>
                          <FaTrash
                            onClick={() => handleDelete(item._id)}
                            color="red"
                            style={{ cursor: "pointer" }}
                          />
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div style={{ textAlign: "center", width: "100%" }}>
                      No data Found
                    </div>
                  )}
                </Div>
              </div>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
