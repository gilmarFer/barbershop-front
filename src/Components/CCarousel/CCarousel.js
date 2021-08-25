import React from 'react';
import './CCarousel.css';
import { Carousel, Button, Row } from 'react-bootstrap';
import logo from '../../img/logo.png';
import img2 from '../../img/carousel/2.jpg';
import img3 from '../../img/carousel/3.jpg';
import img4 from '../../img/carousel/4.jpg';
import CItem from './Item/CItem';

export default function CCarousel() {
  return (
    <>
      <Carousel id="c-carolsel" controls={false}>
        <Carousel.Item>
          <CItem logo={logo} img={img4} />
        </Carousel.Item>
        <Carousel.Item>
          <CItem logo={logo} img={img2} />
        </Carousel.Item>
        <Carousel.Item>
          <CItem logo={logo} img={img3} />
        </Carousel.Item>
      </Carousel>
    </>
  );
}
