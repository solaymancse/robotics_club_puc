import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { topBar } from "../../Data";
import { Wrapper,Div } from "./TopBarElements";

export const TopBar = () => {
  return (
    <Wrapper>
      <Container>
        <Div>
          {topBar.map((data, index) => (
            <Link to={data.link} key={index}>{data.title}</Link>
          ))}
        </Div>
      </Container>
    </Wrapper>
  );
};
