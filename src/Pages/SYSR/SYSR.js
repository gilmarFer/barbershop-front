import { Button, Form } from 'react-bootstrap';
import React from 'react';

export default function SYSR() {
  return (
    <>
      <div id="sch-main">
        <div id="sch-center">
          <h2 className="mt-2">Scheduling</h2>
          <h6>System of scheduling of barbershop</h6>
          <hr />
          <div>
            <h6 className="m-2">
              Jose, you have a scheduling in
              {' '}
              <strong>13/05/2021</strong>
              {' '}
              <strong>at 15:30</strong>
            </h6>
            <div>
              <Button variant="success">OK</Button>
              <Button className="m-2">Share</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
