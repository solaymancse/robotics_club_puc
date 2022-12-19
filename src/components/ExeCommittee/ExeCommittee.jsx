import { Card } from "./Card";
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
import { Link } from "react-router-dom";
import { committeeBottData, committeeTopData } from "../../Data";

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
           <Link to="/all-committee">Check Here</Link>
           </Button>
          </Top>
          <Bottom>
            <TopCom>
              {committeeTopData.map((data, index) => (
                <Card data={data} key={index} width="600px" />
              ))}
            </TopCom>
            <BottCom>
              {committeeBottData.map((data, index) => (
                <Card data={data} key={index} width="400px" gap="25px" />
              ))}
            </BottCom>
            
          </Bottom>
        </Content>
      </Container>
    </Div>
  );
};
