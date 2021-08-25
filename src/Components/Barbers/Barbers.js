import React from 'react';
import './Barbers.css';
import img1 from '../../img/barbers/1.jpg';
import img2 from '../../img/barbers/2.jpg';
import img3 from '../../img/barbers/3.jpg';
import img4 from '../../img/barbers/4.jpg';

export default function Barbers() {
  return (
    <>
      <div id="barbers-main">
        <div id="barbers-header">
          <div id="barber-line" />
          <h6>Boardroom</h6>
          <h1>Meet the family</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam et
            ipsam rem ullam minima, beatae facilis inventore? At similique nam numquam
            dicta nihil tempore unde fugiat mollitia, rerum alias recusandae?
          </p>
        </div>
        <div id="barbers-barbers">
          <div className="barber-profile">
            <img src={img1} alt="barber1" />
            <h3>John Smith</h3>
            <h6>Master classe dude</h6>
          </div>
          <div className="barber-profile">
            <img src={img2} alt="barber1" />
            <h3>Steven Brown</h3>
            <h6>Master classe dude</h6>
          </div>
          <div className="barber-profile">
            <img src={img3} alt="barber1" />
            <h3>Lenny Smith</h3>
            <h6>Master classe dude</h6>
          </div>
          <div className="barber-profile">
            <img src={img4} alt="barber1" />
            <h3>Chuck Norris</h3>
            <h6>Master classe dude</h6>
          </div>

        </div>
      </div>
    </>
  );
}
