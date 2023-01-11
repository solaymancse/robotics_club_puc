import img11 from "../../images/image11.jpg";
import {
  Card,
  Img,
  P,
  ContentDiv,
  Left,
  H3,
  Title
} from "./UpComingEventsElements";

import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";


export const EventCard = ({data}) => {
  const url_title = data.title.replace(/\s/g, '-');

  return (
    <Card>
      <Img src={data.image} alt="" />
      <ContentDiv>
        <Left>
          <H3>27 March</H3>
        </Left>
        <div>
          <Title>
          <Link to={`/event/${data._id}/${url_title}`}>{data.title}</Link>
          </Title>
          <P>
            <MdLocationOn />
           Premier University Chittagong
          </P>
          <div>
            <Link className="btn btn-outline-dark" to="/event-info">
              Register
            </Link>
          </div>
        </div>
      </ContentDiv>
    </Card>
  );
};
