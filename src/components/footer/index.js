import React from 'react';
import { ReactComponent as Partion } from '../../svg/partition.svg';
import { ReactComponent as Separator } from '../../svg/separators.svg';
import styles from './index.module.css';

const Footer = () => {
  return (
    <div className=" flex flex-col items-center ">
      <div className="m-8 ">
        <Separator />
      </div>
      <div className=" w-[90vw]  flex items-center justify-evenly ">
        <div className="w-[40%] ">
          <h1 className="text-7xl text-white font-bold">
            <span className={styles.gradientText}>
              IIIT <br></br>EVERYTHING
            </span>
          </h1>
        </div>

        <div>
          <Partion />
        </div>

        <div className="w-[40%] ">
          <ul className="text-white font-bold ">
            <li className="py-2">BROWSE RESOURCES</li>
            <li className="py-2">UPLOAD DOCUMENTS</li>
            <li className="py-2"> CREATORS PAGE</li>
            <li className="py-2">CONTACT US</li>
          </ul>
        </div>
      </div>
      <div className="m-8">
        <Separator />
      </div>
      <div className="m-8 text-white font-bold text-sm">
        <h>
          2023 &#169; IIIT EVERYTHING - BY SWOYAM, SANGDIL, PRINCE AND KANISKA -
          ALL RIGHTS RESERVED
        </h>
      </div>
    </div>
  );
};

export default Footer;
