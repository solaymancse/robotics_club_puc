import {Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Wrapper} from './PageElement';
import logo from '../images/logo.jpg'

export const ErrorPage = () => {
  
  return (
    <Container>
      <Wrapper>
        <img src={logo} alt="Logo" />
     <p> 404 || The Page You Requested was Not Found</p>
     <Link to="/">Home Page</Link>
      </Wrapper>
    </Container>
  )
}
