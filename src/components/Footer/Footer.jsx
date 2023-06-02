import {
  Wrapper,
  Section,
  Img,
  Links,
  H2,
  H1,
  MDiv,
  P,
  RDiv,
  ArrowRight,
} from "./FooterElements";
import { AiOutlineYoutube, AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import logo from "../../images/logo.jpg";
import { Col, Row } from "react-bootstrap";
import { footerData } from "../../Data";

export const Footer = () => {
  return (
    <Wrapper>
  
    <Section>
      <Row>
        <Col>
          <MDiv>
            <Img src={logo} />
            <H1>
              Premier University
              <br />
              Robotics Club
            </H1>
          </MDiv>
          <hr style={{ color: "#fff", width: "70px" }} />
          <hr style={{ color: "#fff", width: "140px", marginTop: "-10px" }} />
            <P>
              The club was founded in, 2010. From then, it has organized three
              line following robot competition (Robo Sprint) and one project
              showcase on automation and measurement. Also, for the first time
              in Bangladesh, this club had arranged a 3 on 3 robot football
              competition which was named as “Robo Soccer”. Some of the
              workshops and seminars organized by the department in last three
              years are listed below.
            </P>
         
        </Col>
        <Col className="mt-3">
          <H2>Quick Links</H2>
          <hr style={{ color: "#fff", width: "70px" }} />
          <hr style={{ color: "#fff", width: "140px", marginTop: "-10px" }} />
          <Row xs={1} md={2}>
            {footerData.map((data, index) => (
              <Col key={index}>
                <Links to={data.link}>
                  <ArrowRight />
                  {data.title}
                </Links>
              </Col>
            ))}
          </Row>
        </Col>
        <Col className="mt-3">
          <H2>Contact Us</H2>
          <hr style={{ color: "#fff", width: "70px" }} />
          <hr style={{ color: "#fff", width: "140px", marginTop: "-10px" }} />
          <Links to="/">roboticspuc@gmail.com</Links>
          <RDiv>
            <a href="/">
              <AiOutlineYoutube />
            </a>
            <a href="/">
              <FaFacebookF />
            </a>
            <a href="/">
              <AiOutlineTwitter />
            </a>
            <a href="/">
              {" "}
              <FaInstagram />
            </a>
          </RDiv>
        </Col>
      </Row>
    </Section>
        
    </Wrapper>
  );
};
