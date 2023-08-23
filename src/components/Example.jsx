import React from 'react';
import '../styles/example.css'; // Import your CSS file
import img5 from '../assets/img5.jpeg'

const Example = () => {
  return (
    <div className="image-container">
      <img src={img5} alt="Your Image" />
      <div className="image-text">Hello, World!</div>
    </div>
  );
};

export default Example;
