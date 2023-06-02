import axios from 'axios';
import {useState} from 'react'
import { MdOutlineAddAPhoto } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { Wrapper,Button } from "../Event/EventElements";

export const UploadPhoto = () => {
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [file, setFile] = useState(null);
  
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const formData = new FormData();
      formData.append("image", file);
      formData.append("title", title);
  
      await axios
        .post("/upload-photo", formData)
        .then((res) => console.log("sucess"))
        .catch((err) => console.log(err));
  
        navigate("/dashboard/gallary");
    };
  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <Wrapper>
                    {file && <img src={URL.createObjectURL(file)} alt="" />}
                    <input
                      type="file"
                      id="file"
                      style={{ display: "none" }}
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                    <label htmlFor="file">
                      <MdOutlineAddAPhoto />
                      Choose Photo
                    </label>
                    <input
                      type="text"
                      placeholder="Title Here"
                      name="title"
                      onChange={(e) => setTitle(e.target.value)}
                    />
              
                 <Button type="submit" mos={loading ? "progress":"pointer"} background={loading ? "#8493CA":"#10CEB1"} onClick={()=> setLoading(true)}>{ loading ?"Creating Please wait.....":"Create"}</Button>
                  </Wrapper>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
