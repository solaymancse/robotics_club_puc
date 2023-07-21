import {
  Div,
  H1,
  Content,
  Top,
  Bottom,
  Item,
  ItemDiv,
  ImgDiv
} from "./ExeCommitteeElements";
import { Container } from "react-bootstrap";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { GridLoader } from "react-spinners";


export const ExeCommittee = () => {
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState('');
  const [committe, setCommitte] = useState();
  const [lastSession, setLastSession] = useState('');
  const [selectedSession, setSelectedSession] = useState(lastSession);



  useEffect(async () => {
    setLoading(true);

    await axios.get(`/committee/${selectedSession.length === 0 ? lastSession : selectedSession}`)
      .then((res) => {
        setCommitte(res.data);
        setLoading(false);
      }).catch((err) => console.log(err));

  }, [selectedSession || lastSession])

  useEffect(async () => {
    await axios.get('/all-session').then((res) => setSession(res.data)).catch((err) => console.log(err));
    await axios.get('/last-session').then((res) => setLastSession(res.data)).catch((err) => console.log(err));
  }, [])

  return (
    <Div>
      <Container>
        <H1>Executive Board</H1>

        <Content>
          <Top>
            <p>Current Committee Memeber</p>
            <p>Session:</p>
            <p>Check All Ex - Committee</p>
            <div>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">Session</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  label="session"

                  value={selectedSession.length === 0 ? lastSession : selectedSession}
                  onChange={(e) => setSelectedSession(e.target.value)}


                >

                  {session && session.map((data) => (

                    <MenuItem value={data._id} key={data._id} >{data.year}</MenuItem>

                  ))}
                </Select>
              </FormControl>
            </div>
          </Top>

          {loading && (
            <div style={{ textAlign: 'center', display: 'flex', marginTop: '10%', marginLeft: '50%' }}>
              <GridLoader color="#36d7b7" />
            </div>
          )}

          {!loading && committe &&
            <Bottom >

              <ItemDiv className="row" data-aos="fade-up">
                {committe?.map((data, index) => (
                  index === 0 &&
                  <Item className="col-6" key={index}>
                    <ImgDiv>
                      <img src={data.image} alt="" />
                    </ImgDiv>
                    <p>{data.name}</p>
                    <p>{data.role}</p>
                    <p>{data.designation}</p>

                  </Item>
                ))}
                {committe?.map((data, index) => (
                  index === 1 &&
                  <Item className="col-6" key={index}>
                    <ImgDiv>
                      <img src={data.image} alt="" />
                    </ImgDiv>
                    <p>{data.name}</p>
                    <p>{data.role}</p>
                    <p>{data.designation}</p>

                  </Item>
                ))}
              </ItemDiv>
              <ItemDiv className="row" data-aos="fade-up">
                {committe?.map((data, index) => (
                  index === 2 &&
                  <Item className="col-4" key={index}>
                    <ImgDiv>
                      <img src={data.image} alt="" />
                    </ImgDiv>
                    <p>{data.name}</p>
                    <p>{data.role}</p>
                    <p>{data.designation}</p>

                  </Item>
                ))}
                {committe?.map((data, index) => (
                  index === 3 &&
                  <Item className="col-4" key={index}>
                    <ImgDiv>
                      <img src={data.image} alt="" />
                    </ImgDiv>
                    <p>{data.name}</p>
                    <p>{data.role}</p>
                    <p>{data.designation}</p>

                  </Item>
                ))}
                {committe?.map((data, index) => (
                  index === 4 &&
                  <Item className="col-4" key={index}>
                    <ImgDiv>
                      <img src={data.image} alt="" />
                    </ImgDiv>
                    <p>{data.name}</p>
                    <p>{data.role}</p>
                    <p>{data.designation}</p>

                  </Item>
                ))}
              </ItemDiv>

              <ItemDiv className="row" data-aos="fade-up">
                {committe?.map((data, index) => (
                  index === 5 &&
                  <Item className="col-6" key={index}>
                    <ImgDiv>
                      <img src={data.image} alt="" />
                    </ImgDiv>
                    <p>{data.name}</p>
                    <p>{data.role}</p>
                    <p>{data.designation}</p>

                  </Item>
                ))}
                {committe?.map((data, index) => (
                  index === 6 &&
                  <Item className="col-6" key={index}>
                    <ImgDiv>
                      <img src={data.image} alt="" />
                    </ImgDiv>
                    <p>{data.name}</p>
                    <p>{data.role}</p>
                    <p>{data.designation}</p>

                  </Item>
                ))}
              </ItemDiv>
              <ItemDiv className="row" data-aos="fade-up">
                {committe?.map((data, index) => (
                  index === 7 &&
                  <Item className="col-4" key={index}>
                    <ImgDiv>
                      <img src={data.image} alt="" />
                    </ImgDiv>
                    <p>{data.name}</p>
                    <p>{data.role}</p>
                    <p>{data.designation}</p>

                  </Item>
                ))}
                {committe?.map((data, index) => (
                  index === 8 &&
                  <Item className="col-4" key={index}>
                    <ImgDiv>
                      <img src={data.image} alt="" />
                    </ImgDiv>
                    <p>{data.name}</p>
                    <p>{data.role}</p>
                    <p>{data.designation}</p>

                  </Item>
                ))}
                {committe?.map((data, index) => (
                  index === 9 &&
                  <Item className="col-4" key={index}>
                    <ImgDiv>
                      <img src={data.image} alt="" />
                    </ImgDiv>
                    <p>{data.name}</p>
                    <p>{data.role}</p>
                    <p>{data.designation}</p>

                  </Item>
                ))}
              </ItemDiv>
              <ItemDiv className="row" data-aos="fade-up">
                {committe?.map((data, index) => (
                  index === 10 &&
                  <Item className="col-4" key={index}>
                    <ImgDiv>
                      <img src={data.image} alt="" />
                    </ImgDiv>
                    <p>{data.name}</p>
                    <p>{data.role}</p>
                    <p>{data.designation}</p>

                  </Item>
                ))}
                {committe?.map((data, index) => (
                  index === 11 &&
                  <Item className="col-4" key={index}>
                    <ImgDiv>
                      <img src={data.image} alt="" />
                    </ImgDiv>
                    <p>{data.name}</p>
                    <p>{data.role}</p>
                    <p>{data.designation}</p>

                  </Item>
                ))}
                {committe?.map((data, index) => (
                  index === 12 &&
                  <Item className="col-4" key={index}>
                    <ImgDiv>
                      <img src={data.image} alt="" />
                    </ImgDiv>
                    <p>{data.name}</p>
                    <p>{data.role}</p>
                    <p>{data.designation}</p>

                  </Item>
                ))}
              </ItemDiv>
              <ItemDiv className="row" data-aos="fade-up">
                {committe?.map((data, index) => (
                  index === 13 &&
                  <Item className="col-4" key={index}>
                    <ImgDiv>
                      <img src={data.image} alt="" />
                    </ImgDiv>
                    <p>{data.name}</p>
                    <p>{data.role}</p>
                    <p>{data.designation}</p>

                  </Item>
                ))}
                {committe?.map((data, index) => (
                  index === 14 &&
                  <Item className="col-4" key={index}>
                    <ImgDiv>
                      <img src={data.image} alt="" />
                    </ImgDiv>
                    <p>{data.name}</p>
                    <p>{data.role}</p>
                    <p>{data.designation}</p>

                  </Item>
                ))}
                {committe?.map((data, index) => (
                  index === 15 &&
                  <Item className="col-4" key={index}>
                    <ImgDiv>
                      <img src={data.image} alt="" />
                    </ImgDiv>
                    <p>{data.name}</p>
                    <p>{data.role}</p>
                    <p>{data.designation}</p>

                  </Item>
                ))}
              </ItemDiv>

            </Bottom>}

        </Content>
      </Container>
    </Div>
  );
};
