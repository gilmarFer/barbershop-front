import { Button, Form } from 'react-bootstrap';
import React from 'react';

export default function SSCH() {
  return (
    <>
      <div id="sch-main">
        <div id="sch-center">
          <h2 className="mt-2">Scheduling</h2>
          <h6>System of scheduling of barbershop</h6>
          <hr />
          <div style={{ textAlign: 'left' }}>
            <Form>
              <Form.Group className="m-3">
                <Form.Label>Select a barber</Form.Label>
                <Form.Control as="select">
                  <option>José</option>
                  <option>Maria</option>
                  <option>Fernando</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="m-3">
                <Form.Label>Select a hour</Form.Label>
                <Form.Control as="select">
                  <option>08:00</option>
                  <option>08:30</option>
                  <option>09:00</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="m-3">
                <Form.Label>Enter your name</Form.Label>
                <Form.Control type="text" placeholder="José" />
              </Form.Group>
              <Form.Group className="m-3">
                <Form.Label>Enter your phone</Form.Label>
                <Form.Control type="text" placeholder="(11) 9-9888-7777" />
              </Form.Group>
            </Form>
          </div>
          <Button className="w-75 m-2">Submit</Button>
        </div>
      </div>
    </>
  );
}
