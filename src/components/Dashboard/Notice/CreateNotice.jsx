import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import { Wrapper,Button } from "../Event/EventElements";
import { useNavigate } from "react-router-dom";
import axios from "axios";



export const CreateNotice = () => {
  const editor = useRef(null);
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");

  const [notice, setNotice] = useState({
    title:"",
    desc:"",
  });

  const {title, desc} = notice;

  const handleChange = (e)=> {
    setNotice({...notice, [e.target.name]:e.target.value});
  
  }

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();


    await axios
      .post("/notices",{
        title,
        desc:content,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

      navigate("/dashboard/notice");
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
                    <input
                      type="text"
                      placeholder="Title Here"
                      name="title"
                      onChange={handleChange}
                    />

                    <JoditEditor
                      ref={editor}
                      onChange={(content) => setContent(content)}
                    />
                 <Button  type="submit"  background={loading ? "#333":"#10ceb1"} onClick={()=> setLoading(true)}>{ loading ?"Creating Please wait.....":"Create"}</Button>
                  </Wrapper>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
