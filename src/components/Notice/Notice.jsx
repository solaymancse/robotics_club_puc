import { Container } from "react-bootstrap";
import { GiRead } from "react-icons/gi";
import { Link } from "react-router-dom";
import { noticeData } from "../../Data";
import { Wrapper, Top, Bottom, Title, More } from "./NoticeElements";

export const Notice = () => {
  return (
    <Wrapper>
      <Container>
        <Top>
          <Title>Notice</Title>
          <a href="/all-notice">View All</a>
        </Top>
        {noticeData.map((data, index) => (
          <Bottom key={index}>
            <h2>{data.title}</h2>
            <p>{data.p}</p>
            <More>
              <GiRead /> <Link to={data.link}>Read More</Link>
            </More>
          </Bottom>
        ))}
      </Container>
    </Wrapper>
  );
};
