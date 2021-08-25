import { Button } from 'react-bootstrap';
import React from 'react';
import './sch.css';
import { Link } from 'react-router-dom';

export default function Sch() {
  return (
    <>
      <div id="sch-main">
        <div id="sch-center">
          <h2 className="mt-2">Scheduling</h2>
          <h6>System of scheduling of barbershop</h6>
          <hr />
          <div>
            <h6>Choose an options</h6>
            <Link to="/sys">
              <Button className="m-2">See your appointments</Button>
            </Link>
            <Link to="/ssch">
              <Button className="m-2" variant="success">Schedule</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
