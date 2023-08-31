import React from 'react';
// import Lottie from '../../images/tempLottie.png';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import animationData from '../../images/animationData.json';
import { ReactComponent as Arrow } from '../../svg/rightArrow.svg';
import { ReactComponent as SpikeHead } from '../../svg/spikehead.svg';
import './index.module.css';
import styles from './index.module.css';

const Hero = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className=" flex lg:flex-row flex-col-reverse max-w-[95vw] items-center justify-between overflow-x-hidden ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="lg:text-4xl text-2xl text-center lg:text-left text-white font-bold">
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
          <p className="lg:text-sm text-xs lg:block hidden text-white mt-4 lg:text-left text-center">
            We understand the challenges that students face when it comes
            <br></br> to finding reliable study materials and resources. That's
            why we <br></br>have created a platform that brings together the
            collective <br></br> knowledge, making it easier than ever to excel
            in your studies.
          </p>
        </motion.div>
        <div className="flex items-center justify-center lg:justify-normal mt-6">
          <Link link to="/browse">
            <button className="text-txtPurple  bg-gradient-to-r hover:bg-gradient-to-l from-customPurple to-customIndigo  px-8 py-4  rounded-3xl text-sm   font-bold transition duration-900">
              BROWSE RESOURCES
            </button>
          </Link>
          <div className={`${styles.animation} lg:block hidden`}>
            <Arrow />
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 lg:h-1/2 pointer-events-none ">
        <motion.div
          initial={{ opacity: 0, transform: 'translateX(10%)' }}
          animate={{ opacity: 1, transform: 'translateX(0)' }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* <img
            className="lg:pb-20 lg:translate-x-40 translate-x-5 overflow-x-hidden pointer-events-none  lg:w-auto lg:h-[80vh] lg:scale-[1.4]  scale-[1.2]  "
            src={Lottie}
            alt="img"
          /> */}

          <div className="lg:pb-20 lg:translate-x-10 translate-x-5 pointer-events-none  lg:w-auto lg:h-[80vh] relative  ">
            <Lottie options={defaultOptions} />

            <SpikeHead className=" z-[-1] pointer-events-none opacity-80 absolute top-0 lg:top-10 xl:right-48 xl:scale-[1.6] lg:scale-[1.4] sm:w-[80vw] sm:right-40 sm:scale-[1.2] sm:hidden block lg:block lg:w-auto " />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
