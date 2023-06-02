import "../Dashboard";
import { useState,useRef ,useEffect} from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import JoditEditor from "jodit-react";
import { Wrapper,Button } from "../Event/EventElements";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { useParams } from "react-router-dom";


axios.defaults.withCredentials = true;
export const EditSeminer = () => {
  const {id} = useParams();
  const editor = useRef(null);
  const [seminer, setSeminer] = useState({});
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);

 
  const getSeminer = async () => {
    const res = await axios
      .get(`/seminer/${id}`, {
        withCredentials: true,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };

  useEffect(() => {
    getSeminer().then((data) =>{
      setSeminer(data);
     
    });
  }, []);

  console.log(file);


  return (
    <div className="main-panel">
    <div className="content-wrapper">
      <div className="row">
        <div className="col-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <form >
                <Wrapper>
                  {file && <img src={URL.createObjectURL(file) || seminer.image} alt="" />}
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
                    value={title}
                  />
 
                  <JoditEditor
                    ref={editor}
                    onChange={(content) => setContent(content)}
                   
                  />
                  <img src={seminer.image} alt="" />
               <Button type="submit" mos={loading ? "progress":"pointer"} background={loading ? "#F2EDF3":"#10CEB1"} onClick={()=> setLoading(true)}>{ loading ?"Updating Please wait.....":"Update"}</Button>
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