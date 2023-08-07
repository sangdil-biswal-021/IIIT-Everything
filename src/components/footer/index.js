import React from 'react';
import { ReactComponent as Fbtm } from '../../svg/footerBtmSpine.svg';
import { ReactComponent as Ftop } from '../../svg/footerTopSpine.svg';
import { ReactComponent as Partion } from '../../svg/partition.svg';
import { ReactComponent as Separator } from '../../svg/separators.svg';

import styles from './index.module.css';

const Footer = () => {
  return (
    <>
      <div className=" flex flex-col items-center mt-32 overflow-hidden relative pointer-events-none ">
        <Fbtm className="absolute z-[-1] translate-y-[55vh]  md:block hidden" />
        <Ftop className="absolute z-[-1] translate  md:block hidden" />
        <div className="m-8 scale-50 md:scale-100 ">
          <Separator />
        </div>
        <div className=" w-[90vw]  flex items-center justify-evenly">
          <div className="w-[40%] ">
            <h1 className="md:text-7xl text-5xl text-white font-bold pointer-events-none overflow-hidden">
              <span className={styles.gradientText}>
                IIIT <br></br>EVERYTHING
              </span>
            </h1>
          </div>

          <div>
            <Partion />
          </div>

          <div className="w-[40%] ">
            <ul className="text-white md:text-base text-xs font-bold pointer-events-auto ">
              <li className="py-2">BROWSE RESOURCES</li>
              <li className="py-2">UPLOAD DOCUMENTS</li>
              <li className="py-2"> CREATORS PAGE</li>
              <li className="py-2">CONTACT US</li>
            </ul>
          </div>
        </div>
        <div className="m-8 scale-50 md:scale-100 ">
          <Separator />
        </div>
        <div className="m-8 text-white font-bold text-xs md:text-sm text-center">
          <h>
            2023 &#169; IIIT EVERYTHING - BY SWOYAM, SANGDIL, PRINCE AND KANISKA
            - ALL RIGHTS RESERVED
          </h>
        </div>
      </div>
    </>
  );
};

export default Footer;
