import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css';

export default function Login() {
  return (
    <>
      <div id="login-main">
        <div id="login-card">
          <h3>Adm Login</h3>
          <hr />
          <Form>
            <Form.Group controlId="email">
              <Form.Label>Adm Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text>This is only for adm use!</Form.Text>
            </Form.Group>
          </Form>
          <br />
          <Form>
            <Form.Group controlId="Password">
              <Form.Label>Adm Password</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </Form>
          <br />
          <Button variant="primary" type="submit">Submit</Button>
        </div>
      </div>
    </>
  );
}
