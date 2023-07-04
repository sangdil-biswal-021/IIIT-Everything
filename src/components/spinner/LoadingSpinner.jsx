import React from 'react';
import { MoonLoader } from 'react-spinners';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="spinner">
      <MoonLoader color="white" />
    </div>
  );
};

export default LoadingSpinner;
