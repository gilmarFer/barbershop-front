import { Button, Form } from 'react-bootstrap';
import React from 'react';
import { Link } from 'react-router-dom';

export default function SYS() {
  return (
    <>
      <div id="sch-main">
        <div id="sch-center">
          <h2 className="mt-2">Scheduling</h2>
          <h6>System of scheduling of barbershop</h6>
          <hr />
          <div>
            <Form className="mx-3 mb-2">
              <Form.Group>
                <Form.Label>Enter your phone number</Form.Label>
                <Form.Control type="number" placeholder="(11) 9 98887777" />
              </Form.Group>
              <Form.Group className="mt-2 mb-4">
                <Form.Label>Enter our first name</Form.Label>
                <Form.Control type="text" placeholder="José" />
              </Form.Group>
              <Link to="sysr">
                <Button type="submit" className="w-100">Submit</Button>
              </Link>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
