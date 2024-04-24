import React from 'react';

const ScrollImages = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <marquee behavior="scroll" direction="left">
        <img
          src="images/ferrari.png"
          width="150"
          style={{ height: 150 }}
          alt="ferrari"
        />
        <img
          src="images/ford.png"
          width="150"
          style={{ height: 150 }}
          alt="ford"
        />
        <img
          src="images/lambo.png"
          width="150"
          style={{ height: 150 }}
          alt="lambo"
        />
        <img
          src="images/mahindra.png"
          width="150"
          style={{ height: 150 }}
          alt="mahindra"
        />
        <img
          src="images/tvs.png"
          width="150"
          style={{ height: 150 }}
          alt="tvs"
        />
        <img
          src="images/tata.png"
          width="150"
          style={{ height: 150 }}
          alt="tata"
        />
        <img
          src="images/hero.png"
          width="150"
          style={{ height: 150 }}
          alt="hero"
        />
        <img
          src="images/rolls.png"
          width="150"
          style={{ height: 150 }}
          alt="rolls"
        />
        <img
          src="images/suzuki.png"
          width="150"
          style={{ height: 150 }}
          alt="suzuki"
        />
      </marquee>
      <br />
      <br />
      <br />
    </div>
  );
};

export default ScrollImages;
