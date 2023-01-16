import { useState } from "react";
import { committeeData } from "../../../Data";
import { Div, Left, InputDiv,Button } from "./CommitteeElements";

export const NewCommittee = () => {

  const [newCommittee, setNewCommittee] = useState({
    cheifadviser:{
      name:"",
    },
    adviser1:{
      name:"",
    },
    adviser2:{
      name:"",
    },
    cheifMentor:{
      name:"",
    },
    mentor:{
      name:"",
    },
    president:{
      name:"",
    },
    secretary:{
      name:"",
    },
    vc:{
     name:"" 
    },
    

  })
  return (
    <div className="main-panel">
      <div className="content-wrapper">
        <div className="row">
          <div className="col-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <form>
                  {committeeData.map((data, index) => (
                    <Div key={index}>
                      <Left>
                        <label htmlFor="Adviser">{data.designation}</label>
                      </Left>
                      <InputDiv>
                        <input type="text" name="" placeholder="Full Name"/>
                        <input type="text" name="" placeholder="Club Designation" />
                        <input type="text" name="" placeholder="Designation and Name of Department"/>
                        <input type="file" name="" id="" />
                      </InputDiv>
                    </Div>
                  ))}

                  <Button>
                    <button type="submt">Create new Committee</button>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
