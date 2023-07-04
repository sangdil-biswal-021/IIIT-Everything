import React from 'react';
import './index.module.css';
import styles from './index.module.css';

const Hero = () => {
  return (
    <div className=" py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl text-white font-bold">
          <span className={styles.gradientText}>Your one-stop</span>
          &nbsp; destination <br></br>
          for your study needs at<br></br>
          <span className={styles.gradientText}>IIIT Bhubaneswer</span>
        </h1>
        <p className="text-sm text-white mt-4">
          We understand the challenges that students face when it comes<br></br>{' '}
          to finding reliable study materials and resources. That's why we{' '}
          <br></br>have created a platform that brings together the collective{' '}
          <br></br> knowledge, making it easier than ever to excel in your
          studies.
        </p>
        <button className="bg-white text-txtPurple hover:bg-txtPurple hover:text-white px-6 py-2 rounded-md mt-6 font-medium">
          BROWSE RESOURCES
        </button>
      </div>
    </div>
  );
};

export default Hero;
