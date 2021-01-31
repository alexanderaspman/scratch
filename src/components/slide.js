import React from 'react';
import { Slide } from 'react-slideshow-image';
import slide1 from '../img/bjc1.png'
import slide2 from '../img/bjc2.png'
import slide4 from '../img/bjc3.png'
import slide3 from '../img/bjc5.png'


const slideImages = [
  slide1,
  slide2,
  slide3,
  slide4
];

const Slideshow = () => {
    return (
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                <span></span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            </div>
            </div>
          <div className="each-slide">
          <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
            </div>

          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;