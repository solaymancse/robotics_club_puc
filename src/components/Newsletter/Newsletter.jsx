import { Wrapper, Left, Right, Div,Button } from "./NewsletterElements";
import robot from "../../images/robot.png";
import { Container } from "react-bootstrap";
export const Newsletter = () => {
  return (
    <Wrapper>
      <Container>
        <Div>
          <Left>
            <p>Email For More Information</p>
            <Button>
            <input type="text" placeholder="Email" />
            <button>Subscribe</button>
            </Button>
          </Left>
          <Right>
            <img src={robot} alt="" />
          </Right>
        </Div>
      </Container>
    </Wrapper>
  );
};
