import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Div, Img ,P, Para, H1} from "./ExeCommitteeElements";
import img8 from "../../images/image8.jpg";
import img9 from "../../images/image9.jpg";
import img10 from "../../images/image10.jpg";
import img20 from "../../images/image20.jpg";
import img18 from "../../images/image18.jpg";
import img19 from "../../images/image19.png";
import img21 from "../../images/image21.jpg";
import img22 from "../../images/image22.jpg";
import img23 from "../../images/image23.jpg";
import img24 from "../../images/image24.jpg";
import img25 from "../../images/image25.jpg";
import img26 from "../../images/image26.jpg";
import img27 from "../../images/image27.jpg";
import img28 from "../../images/image28.jpg";

export const ExeCommittee = () => {
  return (
    <Div>
      <H1>Executive Board</H1>

      <Container>
      <Row style={{marginTop:"50px"}}>
          <Col md={{ sPan: 3, offset: 3 }} style={{marginBottom:"50px"}}>
            <Img src={img9} />
            <P>
              Tuton Chandra Mallick 
              <br />
              Chief Advisor
              <br />
              Associate Professor, Department of EEE
            </P>
          </Col>
          <Col md={{ sPan: 2, offset: 1 }} >
            <Img src={img10} />
            <P>
            Mohammed Saifuddin Munna
              <br />
              Advisor
              <br />
              Assistant Professor, Department of EEE
            </P>
          </Col>
        </Row>
        <Row >
          <Col md={{ sPan: 3, offset: 3 }} style={{marginBottom:"50px"}}>
            <Img src={img8} />
            <P>
              Rahul Chowdhury
              <br />
              Chief Mentor
              <br />
              Lecturer, Department of EEE
            </P>
          </Col>
          <Col md={{ sPan: 2, offset: 1 }} >
            <Img src={img19} />
            <P>
              Sumen Dutta
              <br />
              Mentor
              <br />
               Lecturer, Department of EEE
            </P>
          </Col>
        </Row>
        <Row>
          <Col md={{ sPan: 3, offset: 3 }}>
            <Img src={img28} />
            <P>
              Utchash Dev Nath
             <br/>
             President
            </P>
          </Col>
          <Col md={{ sPan: 2, offset: 1 }}>
            <Img src={img21} />
            <P>
              Rakibul Hasan
              <br />
              General Secretary
            </P>
          </Col>
        </Row>

        <Row style={{marginTop:"30px"}}>
          <Col md={{ sPan: 2, offset: 1 }} style={{marginBottom:"50px"}}>
            <Img src={img22} />
            <Para>
              Joydip Biswas
              <br />
              Vice President
            </Para>
          </Col>
          <Col md={{ sPan: 2, offset: 2 }}>
            <Img src={img23} />
            <Para>
              Abdullah Fahim
              <br />
              Joint Secretary
            </Para>
          </Col>
          <Col md={{ sPan: 2, offset: 2 }}>
            <Img src={img8} />
            <Para>
              Monjur Alam
              <br />
              Organizing Secretary
            </Para>
          </Col>
        </Row>
        <Row style={{marginTop:"30px"}}>
          <Col md={{ sPan: 2, offset: 1 }} style={{marginBottom:"50px"}}>
            <Img src={img24} />
            <Para>
              Bijoy Kumar Shushil
             
              <br />
              Finance Secretary
            </Para>
          </Col>
          <Col md={{ sPan: 2, offset: 2 }}>
            <Img src={img25} />
            <Para>
              Mohammad Ripon
              <br />
              Technical Secretary
            </Para>
          </Col>
          <Col md={{ sPan: 2, offset: 2 }}>
            <Img src={img18} />
            <Para>
              Sajjad Hossain Talukdar
              <br />
              Program Secretary
            </Para>
          </Col>
        </Row>
        <Row style={{marginTop:"30px"}}>
          <Col md={{ sPan: 2, offset: 1 }} style={{marginBottom:"50px"}}>
            <Img src={img26} />
            <Para>
             Rumel Boidya
              <br />
              Training Secretary
            </Para>
          </Col>
          <Col md={{ sPan: 2, offset: 2 }}>
            <Img src={img27} />
            <Para>
             Swarup Paul
              <br />
              Social & Membership Development Co-Ordinator
            </Para>
          </Col>
          <Col md={{ sPan: 2, offset: 2 }}>
            <Img src={img20} />
            <Para>
               Fowzia Tasneen
              <br />
              Excutive Member
            </Para>
          </Col>
        </Row>
        <Row style={{marginTop:"30px"}}>
        <Col  md={{ span: 6, offset: 3 }}  style={{textAlign:'center'}}>
            <Img src={img8} />
            <Para>
              Abdullah Ovi
              <br />
              Excutive Member
            </Para>
          </Col>
        </Row>
        <Row>
   
  </Row>
      </Container>
    </Div>
  );
};
