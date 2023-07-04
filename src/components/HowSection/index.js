import React from 'react';
import { ReactComponent as ArrowLong } from '../../svg/ArrowLong.svg';
import './index.module.css';

const How = () => {
  return (
    <div className=" flex max-w-[95vw] mt-4 mb-4 ">
      <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8 ">
        <h1 className="text-4xl text-white font-bold">HOW TO USE</h1>

        <div className="flex items-center  text-white font-thin font-mono text-4xl">
          THE WEBSITE
          <div
            // className={styles.animation}
            className="ml-8"
          >
            <ArrowLong />
          </div>
        </div>
      </div>
      <div className="w-1/2 h-1/2  text-white font-mono ">
        <p className="w-auto sm:mr-12">
          {' '}
          Lorem ipsum dolor sit amet consectetur. Velit integer turpis ornare
          diam. Lacus non congue ipsum hac neque. Bibendum commodo tellus ipsum
          sem amet facilisi. Duis ipsum sit et sit commodo fames vehicula.
          Ornare viverra sed sit risus nullam maecenas volutpat. Sit odio sed
          scelerisque amet mi convallis vulputate. Sem mattis eget aliquam est.
          Lorem ipsum dolor sit amet consectetur. Velit integer turpis ornare
          diam. Lacus non congue ipsum hac neque. Bibendum commodo tellus ipsum
          sem amet facilisi. Duis ipsum sit et sit commodo fames vehicula.
          Ornare viverra sed sit risus nullam maecenas volutpat. Sit odio sed
          scelerisque amet mi convallis vulputate. Sem mattis eget aliquam est.
        </p>
      </div>
    </div>
  );
};

export default How;
