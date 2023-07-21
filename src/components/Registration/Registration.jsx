import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody
} from 'mdb-react-ui-kit';

export const Registration = ({show,setShow,toggleShow}) => {
  return <>
    <MDBModal show={show} setShow={setShow}>
        <MDBModalDialog size='sm'>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Small modal</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>...</MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
  
  </>
  
  
}

