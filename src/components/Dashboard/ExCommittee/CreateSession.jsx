import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { SessionTable } from "./SessionTable";
import {AiOutlineSend} from 'react-icons/ai';
import {FormControl} from './CommitteeElements'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

export const CreateSession = () => {
  const [newSession, setNewSession] = useState({
    year:"",
  });
  const {year} = newSession;

  const navigate = useNavigate();

  const handleChange = (e)=> {
      setNewSession({...newSession, [e.target.name]:e.target.value});
  }

  const createSession = async ()=> {
    await axios.post("/create-session",{
      year
    }).then((res)=> {
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
      setNewSession(res.data)}).catch((err)=> console.log(err));
  }

  const handleSubmit = async(e)=> {
    e.preventDefault();
    createSession().then(()=> navigate('/dashboard/new-session'));

  }

  
  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                 <FormControl>
                 <Box
                    component="form"
                    sx={{ minWidth: 150 }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="outlined-basic"
                      label="New Session Year"
                      variant="outlined"
                      onChange={handleChange}
                      name="year"
                    />
                  </Box>
                  <Button type="submit" variant="contained" endIcon={<AiOutlineSend />}>
                    Create
                  </Button>
                 </FormControl>
                </form>
                <ToastContainer/>
                <SessionTable/>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
