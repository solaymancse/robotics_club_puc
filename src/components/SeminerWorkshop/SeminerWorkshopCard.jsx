import { Link } from "react-router-dom";
import { H2 } from "../UpComingEvents/UpComingEventsElements";
import { Div, Img, H3 } from "./SeminerWorkshopElements";
import { AiOutlineCalendar } from "react-icons/ai";

export const SeminerWorkshopCard = ({data}) => {
  const url_title = data.title.replace(/\s/g, '-');

  return (
    <Div>
      <Img src={data.image} />
      <H3> <AiOutlineCalendar/>{new Date(data.createdAt).toDateString()}</H3>
      <H2>{data.title}</H2>
      <Link to={`/seminer/${data._id}/${url_title}`}>Read More</Link>
    </Div>
  );
};
