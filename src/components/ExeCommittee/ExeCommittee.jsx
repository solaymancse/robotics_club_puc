import { BottomCard } from "./BottomCard";
import {
  Div,
  H1,
  Content,
  Top,
  Bottom,
  TopCom,
  BottCom,
  Button
} from "./ExeCommitteeElements";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { committeeBottData, committeeTopData } from "../../Data";
import { TopCard } from "./TopCard";

export const ExeCommittee = () => {
  return (
    <Div>
      <Container>
        <H1>Executive Board</H1>

        <Content>
          <Top>
            <p>Current Committee Memeber</p>
            <p>Session: 2021 - 2022</p>
            <p>Check All Ex - Committee</p>
           <Button>
           <NavLink to="/all-committee">Check Here</NavLink>
           </Button>
          </Top>
          <Bottom>
            <TopCom>
              {committeeTopData.map((data, index) => (
                <TopCard data={data} key={index}/>
              ))}
            </TopCom>
            <BottCom>
              {committeeBottData.map((data, index) => (
                <BottomCard data={data} key={index}/>
              ))}
            </BottCom>
            
          </Bottom>
        </Content>
      </Container>
    </Div>
  );
};
