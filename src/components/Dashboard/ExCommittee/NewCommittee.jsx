import axios from "axios";
import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { Div, AddButton, InputDiv, Button, Icon } from "./CommitteeElements";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const NewCommittee = () => {
  const [getSession, setGetSession] = useState();
  const [storeSession, setStoreSession] = useState();
  const navigate = useNavigate();

  const [members, setMembers] = useState([
    { name: "", designation: "", role: "", image: null, sessionId: "" },
  ]);

  // onChange Handler
  const handleChange = (e, index) => {
    const { name, value, files } = e.target;
    const newMembers = [...members];
    if (name === "image") {
      newMembers[index].image = files[0];
    } else {
      newMembers[index][name] = value;
    }
    setMembers(newMembers);
  };

 ;

 

  // handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    
      formData.append(`name`, members.name);
      formData.append(`designation`, members.designation);
      formData.append(`role`, members.role);
      formData.append(`sessionId`, storeSession);
      formData.append(`image`, members.image);
  

    await axios
      .post("/create-committee", formData)
      .then((res) => console.log({ res })).then(()=> {
        toast.success("Session Created Successfully.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
          navigate('/dashboard/committee');
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const getAllSession = async () => {
      await axios
        .get("/all-session")
        .then((res) => {
          setGetSession(res.data);
          if (res.data.length > 0) {
            setStoreSession(res.data[0]._id);
          }
        })
        .catch((err) => console.log(err));
    };
    getAllSession();
  }, []);

  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <Div>
                  <form onSubmit={handleSubmit}>
                    <Form.Select aria-label="Default select example">
                      <option>---Select Session</option>
                      {getSession &&
                        getSession.map((item) => (
                          <option
                            value={item._id}
                            key={item._id}
                            name="sessionId"
                            onChange={() => setStoreSession(item._id)}
                          >
                            {item.year}
                          </option>
                        ))}
                    </Form.Select>
                    {members.map((member, index) => (
                      <InputDiv key={index}>
                        <label>
                          Name:
                          <input
                            type="text"
                            name="name"
                            value={member.name}
                            onChange={(e) => handleChange(e, index)}
                          />
                        </label>
                        <label>
                          Designation:
                          <input
                            type="text"
                            name="designation"
                            value={member.designation}
                            onChange={(e) => handleChange(e, index)}
                          />
                        </label>
                        <label>
                          Role:
                          <input
                            type="text"
                            name="role"
                            value={member.role}
                            onChange={(e) => handleChange(e, index)}
                          />
                        </label>
                        <label>
                          Picture:
                          <input
                            type="file"
                            name="image"
                            onChange={(e) => handleChange(e, index)}
                          />
                        </label>
                     
                      </InputDiv>
                    ))}
                
                    <Button type="submit">Submit</Button>
                  </form>
                 
                </Div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
