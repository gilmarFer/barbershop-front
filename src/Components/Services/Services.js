import React from 'react';
import './Services.css';
import { FaCut, FaBars } from 'react-icons/fa';

export default function Services() {
  const cardItens = [
    {
      icon: FaCut,
      title: 'Hair cut & styling',
      price: 'R$36.00',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, officiis rerum animi',
    },
  ];

  return (
    <>

      <div id="service-main">
        <div className="ver-line" />
        <br />
        <h1>We cut hair, not corners</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, soluta veniam.
          <br />
          nemo. Dolor repellendus, mollitia architecto vero fugiat, earum possimus tempora ea.
        </p>

        <div id="services-col-main">
          <div id="services-row-main">
            <div id="services-col" className="space-05">
              <div id="services-row">
                <FaBars size="1.5rem" className="icon-card" />
                <div id="services-title-card" className="">
                  <h5>Hair cut & styling</h5>
                </div>
                <h5>R$36.00</h5>
              </div>
              <h6>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, officiis rerum animi
              </h6>
            </div>
            <div id="services-col" className="space-05">
              <div id="services-row">
                <FaCut size="1.5rem" className="icon-card" />
                <div id="services-title-card">
                  <h5>Hair cut & styling</h5>
                </div>
                <h5>R$36.00</h5>
              </div>
              <h6>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, officiis rerum animi
              </h6>
            </div>
          </div>
        </div>

        <div id="services-col-main">
          <div id="services-row-main">
            <div id="services-col" className="space-05">
              <div id="services-row">
                <FaCut size="1.5rem" className="icon-card" />
                <div id="services-title-card" className="">
                  <h5>Hair cut & styling</h5>
                </div>
                <h5>R$36.00</h5>
              </div>
              <h6>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, officiis rerum animi
              </h6>
            </div>
            <div id="services-col" className="space-05">
              <div id="services-row">
                <FaCut size="1.5rem" className="icon-card" />
                <div id="services-title-card" className="">
                  <h5>Hair cut & styling</h5>
                </div>
                <h5>R$36.00</h5>
              </div>
              <h6>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, officiis rerum animi
              </h6>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
