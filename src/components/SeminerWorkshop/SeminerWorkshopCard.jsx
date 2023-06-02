import { Link } from "react-router-dom";
import { H2 } from "../UpComingEvents/UpComingEventsElements";
import { Div, Img, H3 } from "./SeminerWorkshopElements";

export const SeminerWorkshopCard = ({data}) => {
 

  return (
    <Div>
      <Img src={data.image} />
      <H3>{new Date(data.createdAt).toDateString()}</H3>
      <H2>{data.title}</H2>
      <Link to={`/seminer/${data._id}/`}>Read More</Link>
    </Div>
  );
};
