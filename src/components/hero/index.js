import React from 'react';
import Lottie from '../../images/tempLottie.png';
// import Lottie from 'react-lottie';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ReactComponent as Arrow } from '../../svg/rightArrow.svg';
import './index.module.css';
import styles from './index.module.css';

const Hero = () => {
  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: 'xMidYMid slice',
  //   },
  // };

  return (
    <div className=" flex max-w-[95vw] items-center justify-between ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl text-white font-bold">
            <span className={styles.gradientText}>Your one-stop</span>
            &nbsp; destination <br></br>
            for your study needs at<br></br>
            <span className={styles.gradientText}>IIIT Bhubaneswer</span>
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, transform: 'translateX(-10%)' }}
          animate={{ opacity: 1, transform: 'translateX(0)' }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-sm text-white mt-4">
            We understand the challenges that students face when it comes
            <br></br> to finding reliable study materials and resources. That's
            why we <br></br>have created a platform that brings together the
            collective <br></br> knowledge, making it easier than ever to excel
            in your studies.
          </p>
        </motion.div>
        <div className="flex items-center mt-6">
          <Link link to="/browse">
            <button className="text-txtPurple  bg-gradient-to-r hover:bg-gradient-to-l from-customPurple to-customIndigo  px-8 py-4  rounded-3xl text-sm   font-bold transition duration-900">
              BROWSE RESOURCES
            </button>
          </Link>
          <div className={styles.animation}>
            <Arrow />
          </div>
        </div>
      </div>

      <div className="w-1/2 h-1/2 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, transform: 'translateX(10%)' }}
          animate={{ opacity: 1, transform: 'translateX(0)' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img
            className="pb-20 translate-x-28 pointer-events-none"
            style={{ width: 'auto', height: '80vh', scale: '1.4' }}
            src={Lottie}
            alt="img"
          />
          {/* <Lottie options={defaultOptions} /> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
