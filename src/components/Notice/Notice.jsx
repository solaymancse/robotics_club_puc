import { Container } from "react-bootstrap";
import { GiRead } from "react-icons/gi";
import { Link } from "react-router-dom";
import { Wrapper, Top, Bottom, Title, More } from "./NoticeElements";
import axios from "axios";
import { useState, useEffect } from "react";

export const Notice = () => {
  const [notice, setNotice] = useState();

  const getALlNotices = async () => {
    const res = await axios
      .get("/all-notices", {
        withCredentials: true,
      })
      .catch((err) => console.log(err));
     
      return res.data;
  };
  useEffect(() => {
    getALlNotices().then((data) => setNotice(data));
  }, []);

  return (
    <Wrapper>
      <Container>
        <Top>
          <Title>Notice</Title>
          <Link to="/all-notice">View All</Link>
        </Top>
        {notice && notice.map((item, index) => (
          <Bottom key={index}>
            <h3>{item.title}</h3>
            <p>Last Updated : {new Date(item.updatedAt).toDateString()}</p>
            <More>
              <GiRead /> <Link to={`/notice/${item._id}/${item.title.replace(/\s/g,'-')}`}>Read More</Link>
            </More>
          </Bottom>
        ))}
      </Container>
    </Wrapper>
  );
};
