import { Link } from "react-router-dom";
import { Wrapper, Container } from "../Event/EventElements";
import { Left, Right, Card, Links } from "./CommitteeElements";
import { GrAddCircle } from "react-icons/gr";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { AiFillEdit } from "react-icons/ai";
import { Form, FormControl } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer } from "react-toastify";


export const ExCommittee = () => {
  const [getSession, setGetSession] = useState();
  const [getLastSession, setGetLastSession] = useState();
  const [selectedSession, setSelectedSession] = useState();
  const [getLastCommittee, setGetLastCommittee] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=> {
const getlastsession  = async ()=> {
await axios.get('/last-session').then((res)=> setGetLastSession(res.data)).catch((err)=> console.log(err));
}
getlastsession();
  },[])
  console.log(getSession);
  // selected value
  const handleSelectChange = (e) => {
    setSelectedSession(e.target.value);
  };
  useEffect(() => {
    const getSelectedSession = async () => {
      await axios
        .get(`/all-session`)
        .then((res) => setGetSession(res.data))
        .catch((err) => console.log(err));
    };
    getSelectedSession();
  }, []);

  useEffect(() => {
    const getCommittee = async () => {
      setIsLoading(true);
      await axios
        .get(`/committee/${selectedSession}`)
        .then((res) => {
          setGetLastCommittee(res.data);
          setIsLoading(false);
        })
        .catch((err) => console.log(err));
    };

    getCommittee();
  }, [selectedSession]);

  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <form>
                  <Wrapper>
                    <Container>
                      <Left>
                        <Form.Select
                          aria-label="Default select example"
                          value={selectedSession}
                          onChange={handleSelectChange}
                        >
                          {getSession &&
                            getSession.map((data) => (
                              <option value={data._id} key={data._id}>
                                {data.year}
                              </option>
                            ))}
                        </Form.Select>

                        <Links>
                          {" "}
                          <Link to="/dashboard/new-session">
                            <GrAddCircle size="24px" background="#10CEB1" />
                          </Link>
                          <p>Create New Session</p>
                        </Links>
                        <Links>
                          {" "}
                          <Link to="/dashboard/new-committee">
                            <GrAddCircle size="24px" background="#10CEB1" />
                          </Link>
                          <p>Create New Committee</p>
                        </Links>
                      </Left>
                      <Right>
                        {isLoading && (
                          <Box sx={{ display: "flex" }}>
                            <CircularProgress />
                          </Box>
                        )}
                        {!isLoading && !getLastCommittee && (
                          <p>No session data available.</p>
                        )}
                        {!isLoading && getLastCommittee && (
                          <>
                            {getLastCommittee && getLastCommittee.map((item) => (
                              <Card key={item._id}>
                                <img src={item.image} alt="" />
                                <p>{item.name}</p>
                                <p>{item.role}</p>
                                <p>{item.designation}</p>
                                <AiFillEdit />
                              </Card>
                            ))}
                          </>
                        )}
                      </Right>
                    
   

      
                    </Container>
                  </Wrapper>
                </form>
                <ToastContainer/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
