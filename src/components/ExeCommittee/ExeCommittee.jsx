import { BottomCard } from "./BottomCard";
import {
  Div,
  H1,
  Content,
  Top,
  Bottom,
  TopCom,
  BottCom,
} from "./ExeCommitteeElements";
import { Container } from "react-bootstrap";
import { committeeBottData, committeeTopData } from "../../Data";
import { TopCard } from "./TopCard";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from "react";

export const ExeCommittee = () => {
  const [age, setAge] = useState('');

  const handleChange = (e) => {
    setAge(e.target.value);
  };
  return (
    <Div>
      <Container>
        <H1>Executive Board</H1>

        <Content>
          <Top>
            <p>Current Committee Memeber</p>
            <p>Session: 2021 - 2022</p>
            <p>Check All Ex - Committee</p>
            <div>
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">Session</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Top>
          <Bottom>
            <TopCom>
              {committeeTopData.map((data, index) => (
                <TopCard data={data} key={index} />
              ))}
            </TopCom>
            <BottCom>
              {committeeBottData.map((data, index) => (
                <BottomCard data={data} key={index} />
              ))}
            </BottCom>
          </Bottom>
        </Content>
      </Container>
    </Div>
  );
};
