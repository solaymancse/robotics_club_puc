import img11 from "../../images/image11.jpg";
import { Card, Img, H2, P, ContentDiv,Left,H3 } from "./UpComingEventsElements";

import { MdLocationOn } from 'react-icons/md'
import { Link } from "react-router-dom";

export const EventCard = (props) => {
  const { title, content } = props;
  return (
    <>
      <Card>
        <Img src={img11} alt="" />
        <ContentDiv>
          <Left>
            <H3>27 March</H3>
          </Left>
          <div>
            <H2>{title}</H2>
            <P><MdLocationOn/>{content}</P>
            <div>
            <Link className="btn btn-outline-dark" to="/event-info">
              Register 
            </Link>
          </div>
          </div>
          
        </ContentDiv>
      </Card>
    </>
  );
};
