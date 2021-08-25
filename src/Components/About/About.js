import React from 'react';
import './About.css';
import img1 from '../../img/carousel/1.jpg';
import img2 from '../../img/carousel/2.jpg';
import img3 from '../../img/carousel/3.jpg';
import img4 from '../../img/carousel/4.jpg';

export default function About() {
  return (
    <>
      <div id="about-main" className="">
        <div className="ver-line" />
        <br />
        <h1>Welcome to our barbershop</h1>
        <br />
        <p>
          Founded in 2004, Boardroom Salon for Men is the Authority in Mens Crooming.
          We cater to men who are looking for an elevated barbershop experience.
        </p>
        <br />
        <div id="about-row-main" className="">
          <div>
            <div id="img1">
              <img id="img1" src={img1} alt="cut1" />
            </div>
          </div>
          <div>
            <div id="about-col-main">
              <div id="img2">
                <img id="img2" src={img2} alt="cut1" />
              </div>
              <div id="img3">
                <img id="img3" src={img3} alt="cut1" />
              </div>
            </div>
            <div id="about-col-main">
              <div id="img4">
                <img id="img4" src={img4} alt="cut1" />
              </div>
              <div id="img5">
                <img id="img5" src={img1} alt="cut1" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}
