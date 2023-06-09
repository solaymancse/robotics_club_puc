import axios from "axios";
import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { Div, Button, Icon,InputDiv } from "./CommitteeElements";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const NewCommittee = () => {
  const [getSession, setGetSession] = useState();
  const [storeSession, setStoreSession] = useState();
  const [image,setImage] = useState(null);
  const [members, setMembers] = useState([
    { name: "", designation: "", role: "", sessionId: "" },
  ]);

  const navigate = useNavigate();

  // onChange Handler
  const handleChange = (e) => {
   setMembers({...members,[e.target.name]:e.target.value});
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
      formData.append(`image`, image);
  

    await axios
      .post("/create-committee", formData)
      .then((res) => console.log({ res })).then(()=> {
        toast.success("One Committee Member Created..", {
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
        .get("/last-session")
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
console.log(storeSession)
  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <Div>
                  <form onSubmit={handleSubmit}>
                    <Form.Select aria-label="Default select example"  >
                      <option>---Select Session</option>
                      {getSession &&
                        getSession.map((item) => (
                          <option
                         
                            key={item._id}
                            name="sessionId"
                            onChange={() => setStoreSession(item._id)}
                          >
                            {item.year}
                          </option>
                        ))}
                    </Form.Select>
                  
                      <InputDiv>
                        <label>
                          Name:
                          <input
                            type="text"
                            name="name"
                            value={members.name}
                            onChange={(e) => handleChange(e)}
                          />
                        </label>
                        <label>
                          Designation:
                          <input
                            type="text"
                            name="designation"
                            value={members.designation}
                            onChange={(e) => handleChange(e)}
                          />
                        </label>
                        <label>
                          Role:
                          <input
                            type="text"
                            name="role"
                            value={members.role}
                            onChange={(e) => handleChange(e)}
                          />
                        </label>
                        <label>
                          Picture:
                          <input
                            type="file"
                            name="image"
                            onChange={(e) => setImage(e.target.files[0])}
                          />
                        </label>
                     
                      </InputDiv>
                  
                
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
