import React from 'react';
import { Carousel, Button, Row } from 'react-bootstrap';
import './CItem.css';

export default function CItem(props) {
  return (
    <div className="c-carousel-item">
      <div id="carousel-alfa" />
      <img
        id="carousel-img"
        className="d-block"
        alt="First slide"
        src={props.img}
      />
      <img id="carousel-logo" src={props.logo} alt="logo" />
      <br />
      <br />
      <h6 id="boardroom">Boardroom</h6>
      <br />
      <h1>Relex, Look Great, Feel Confident.</h1>
      <h6>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, natus illo.
      </h6>
      <h6>
        Nobis, totam soluta eum, dolores expedita voluptas suscipit
      </h6>
      <br />
      <div id="carousel-btn-row">
        <Button variant="warning">Make Appointment</Button>
        <div style={{ width: '10px' }} />
        <Button variant="outline-warning">Contact Us</Button>
      </div>
    </div>
  );
}
