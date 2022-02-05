import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { RegForm } from '../RegForm/RegForm';

export const Registration = (props) => {
  return <>
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         Registration
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <RegForm/>
      </Modal.Body>
      <Modal.Footer>
        
        <Button variant="danger" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
     
    </Modal>
  
  </>
  
  
}

