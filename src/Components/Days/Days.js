import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function Days() {
  return (
    <>
      <Form>
        <Form.Check type="checkbox" label="Monday" id="Monday" />
        <Form.Check type="checkbox" label="Tuesday" id="Tuesday" />
        <Form.Check type="checkbox" label="Wednesday" id="Wednesday" />
        <Form.Check type="checkbox" label="Thursday" id="Thursday" />
        <Form.Check type="checkbox" label="Friday" id="Friday" />
        <Form.Check type="checkbox" label="Saturday" id="Saturday" />
        <Form.Check type="checkbox" label="Sunday" id="Sunday" />
        <Button className="w-100">Save</Button>

      </Form>
    </>
  );
}
