import React from 'react';

// import styles from "./index.module.css";
import How from '../../components/HowSection';
import Hero from '../../components/hero';
import { ReactComponent as LeftSpine } from '../../svg/leftSpine.svg';
// import { ReactComponent as SpikeHead } from '../../svg/spikehead.svg';

export default function HomePage() {
  return (
    <>
      {/* <div className="ml-64  ">
        <SpikeHead className="absolute z-[-1] lg:right-48 lg:top-30 top-20 right-24 lg:scale-[190%] scale-[1.4] pointer-events-none opacity-80" />
      </div> */}
      <LeftSpine className="absolute lg:block hidden pointer-events-none" />
      <Hero />
      <How />
    </>
  );
}
