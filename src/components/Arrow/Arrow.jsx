import React from 'react';
import './Arrow.css'; // Custom CSS for the animation

function ArrowAnimation() {
  return (
    <div id="arrowAnim" className="w-screen  flex justify-center items-center relative">
      <div className="arrowSliding">
        <div className="arrow"></div>
      </div>
      <div className="arrowSliding delay1">
        <div className="arrow"></div>
      </div>
      <div className="arrowSliding delay2">
        <div className="arrow"></div>
      </div>
      <div className="arrowSliding delay3">
        <div className="arrow"></div>
      </div>
    </div>
  );
}

export default ArrowAnimation;
