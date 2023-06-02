import React, { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";
import { Wrapper,Button } from "../Event/EventElements";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";



export const EditNotice = () => {
    const {id} = useParams();
  const editor = useRef(null);
  const [editNotice, setEditNotice] = useState("");
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");

  const [notice, setNotice] = useState({
    title:"",
    desc:"",
  });

  const {title, desc} = editNotice;

const handleChange = async (e)=> {
  setEditNotice({...editNotice,[e.target.name]:e.target.value});
}

  const navigate = useNavigate();
  useEffect(() => {
   if(id){
     getSingleNotice(id);
    }
  }, [id])

  // get single post
  
  const getSingleNotice = async(id)=> {
    await axios.get(`/notice/${id}`).then((res)=> {
        setEditNotice(res.data);
    }).catch((err)=> console.log(err));

  }

  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault();


    await axios
      .put(`/notice/update/${id}`,{
        title,
        desc:content,
      })
      .then((res) => console.log(res.msg))
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
                      value={title}
                    />

                    <JoditEditor
                      ref={editor}
                      onChange={(content) => setContent(content)}
                      value={desc}
                    />
                 <Button type="submit" mos={loading ? "progress":"pointer"} background={loading ? "#F2EDF3":"#10CEB1"} onClick={()=> setLoading(true)}>{ loading ?"Updating Please wait.....":"Update"}</Button>
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
