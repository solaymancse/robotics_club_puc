import { Modal } from 'react-bootstrap';
import { RegForm } from '../RegForm/RegForm';

export const Registration = (props) => {
  return <>
    <Modal
      {...props}
      
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         Registration
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <RegForm close={props.close}/>
      </Modal.Body>   
    </Modal>
  
  </>
  
  
}

