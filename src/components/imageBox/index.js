import React, { useRef } from 'react';
import './imageBox.css';

const ImageBox = () => {
  const scrollRef = useRef();

  const handleButtonClick = () => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };

  return (
    <div className="image-box">
      <img src="path/to/image.jpg" alt="Image" className="image" />
      <button className="scroll-button" onClick={handleButtonClick}>
        Scroll to Bottom
      </button>
      <div ref={scrollRef} className="h-100 border-2 bg-red-900" />
    </div>
  );
};

export default ImageBox;
