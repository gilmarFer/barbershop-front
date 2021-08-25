import React from 'react';
import { Container } from 'react-bootstrap';

import './Adm.css';
import Employers from '../../Components/Employers/Employers';
import Days from '../../Components/Days/Days';
import Hours from '../../Components/Hours/Hours';

export default function Adm() {
  return (
    <>
      <div id="adm-main">
        <Container>
          <br />
          <h2 className="text-center">Adm Panel</h2>
          <hr />
          <h4>Employers controller</h4>
          <h6>Configure your employees here</h6>
          <Employers />
          <hr />

          <div style={{ margin: '1rem 0' }}>
            <h4>Days controller</h4>
            <h6>Configure the days here</h6>
            <div>
              <Days />
            </div>
          </div>
          <hr />

          <div style={{ margin: '1rem 0' }}>
            <h4>Hours controller</h4>
            <h6>Configure the hours here</h6>
            <div>
              <Hours />
            </div>
          </div>
          <hr />
          <br />
        </Container>
      </div>
    </>
  );
}
