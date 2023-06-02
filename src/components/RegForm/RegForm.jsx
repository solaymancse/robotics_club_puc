import { Button } from "./RegFormElements";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";
import swal from "sweetalert";
import axios from "axios";

export const RegForm = ({ close }) => {
  const [newMember, setNewMember] = useState({
    name: "",
    email: "",
    studentId: "",
    dept: "",
    gender: "",
    dob: "",
    bg: "",
    phone: "",
    address: "",
  });
  const { name, email, studentId, dept, gender, dob, bg, phone, address } =
    newMember;
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setNewMember({ ...newMember, [e.target.name]: e.target.value });
  };

  const sendRegisterReq = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("studentId", studentId);
    formData.append("department", dept);
    formData.append("gender", gender);
    formData.append("dob", dob);
    formData.append("bloodGrp", bg);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("image", file);

    await axios
      .post("/member", formData)
      .then(() => {
        swal(
          "You're Successfully Register!",
          "You're Advised to Contact EEE Club",
          "success"
        );
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    sendRegisterReq();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          component="form"
          sx={{
           
            width: 500,
            maxWidth: "100%",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            size="small"
            fullWidth
            margin="normal"
            onChange={handleChange}
            name="name"
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            size="small"
            fullWidth
            margin="normal"
            onChange={handleChange}
            name="email"
          />
          <TextField
            id="outlined-basic"
            label="Student ID"
            variant="outlined"
            size="small"
            fullWidth
            margin="normal"
            onChange={handleChange}
            name="studentId"
          />
          <FormControl
            sx={{ maxWidth: "100%" }}
            size="small"
            fullWidth
            margin="normal"
          >
            <InputLabel id="demo-select-small">Department</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={dept}
              label="Age"
              fullWidth
              onChange={handleChange}
              name="dept"
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value="EEE">EEE</MenuItem>
              <MenuItem value="CSE">CSE</MenuItem>
              <MenuItem value="Mathematics">Mathematics</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            sx={{ maxWidth: "100%" }}
            size="small"
            fullWidth
            margin="normal"
          >
            <InputLabel id="demo-select-small">Gender</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={gender}
              label="Gender"
              fullWidth
              onChange={handleChange}
              name="gender"
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="outlined-multiline-static"
            label="Date Of Birth"
            variant="outlined"
            size="small"
            fullWidth
            type="date"
            margin="normal"
            onChange={handleChange}
            name="dob"
          />
          <TextField
            id="outlined-basic"
            label="Blood Group"
            variant="outlined"
            size="small"
            fullWidth
            margin="normal"
            onChange={handleChange}
            name="bg"
          />
          <TextField
            id="outlined-basic"
            label="Mobile Number"
            variant="outlined"
            size="small"
            fullWidth
            margin="normal"
            onChange={handleChange}
            name="phone"
          />
          <TextField
            id="outlined-basic"
            label="Address"
            variant="outlined"
            size="small"
            fullWidth
            margin="normal"
            onChange={handleChange}
            name="address"
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            fullWidth
            type="file"
            margin="normal"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </Box>

        <Button type="submit" onClick={() => close(false)}>
          Register
        </Button>
      </form>
    </>
  );
};
