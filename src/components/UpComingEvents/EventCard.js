
import img11 from '../../images/image11.jpg'
import { Div,Img,H2,P } from './UpComingEventsElements'

export const EventCard = (props)=> {
  const { title, content } = props;
  return (
  <>
  <Div>
    <Img src={img11} height={100} width={100} alt="" />
    <div>
      <H2>{title}</H2>

      <P>{content}</P>
    </div>
    <div
      style={{
        marginLeft: "80px",
        textAlign: "center",
        marginTop: "10px",
      }}
    >
      <a className='btn btn-danger me-3' href='/'>Register</a>
      
    </div>
  </Div>
  </>
  );
    
}