import React, { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";
import { Wrapper,Button } from "./EventElements";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";



export const EditEvent = () => {
  const editor = useRef(null);
  const [event, setEvent] = useState({});
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [file, setFile] = useState(null);

  const {id} = useParams();

  useEffect(() => {
   if(id){
    getSingleEvent(id);
   }
  }, [id])
  
const getSingleEvent = async(id)=> {
await axios.get(`/events/${id}`).then((res)=>{
  setTitle(res.data.title);
  setContent(res.data.description);
  setFile(res.data.image);
}).catch((err)=>{
  console.log(err);
});

}

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", title);
    formData.append("description", content);
    formData.append("eventDate", eventDate);

    await axios
      .put(`/update/${id}`, formData)
      .then((res) => console.log("sucess"))
      .catch((err) => console.log(err));

      navigate("/dashboard/event");
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
                      value={title}
                    />
                    <input
                      type="date"
                      placeholder="Event Date"
                      name="eventDate"
                      onChange={(e) => setEventDate(e.target.value)}
                    value={new Date(event.eventDate).getDate()}
                    />
                    <JoditEditor
                      ref={editor}
                      onChange={(content) => setContent(content)}
                     
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
