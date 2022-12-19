import {Button} from "./RegFormElements";
import { Form } from "react-bootstrap";

export const RegForm = () => {
  return (
    <>
      <Form>
        <Form.Group className="mb-2">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Your Name" />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Student ID</Form.Label>
          <Form.Control type="number" placeholder="Enter Your ID" />
        </Form.Group>
        <Form.Group className="mb-2">
        <Form.Select aria-label="Default select example">
          <option>Department</option>
          <option value="eee">EEE</option>
          <option value="cse">CSE</option>
          <option value="math">Mathematics</option>
        </Form.Select>
        </Form.Group>
        <Form.Group className="mb-2">
        <Form.Select aria-label="Default select example">
          <option>Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>   
        </Form.Select>
        </Form.Group>     
        <Form.Group className="mb-2" controlId="formBasicEmail">
          <Form.Label>Date Of Birth</Form.Label>
          <Form.Control type="date" placeholder="Birthday" />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicPassword">
          <Form.Label>Blood Group</Form.Label>
          <Form.Control type="text" placeholder="Blood Group" />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group className="mb-2" controlId="formBasicPassword">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control type="number" placeholder="Mobile Number" />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicPassword">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Address" />
        </Form.Group>
        <Form.Group controlId="formFileLg" className="mb-2">
          <Form.Label>Passport Image</Form.Label>
          <Form.Control type="file" size="sm" />
        </Form.Group>

        <Button type="submit">
          Register
        </Button>
      </Form>
    </>
  );
};
