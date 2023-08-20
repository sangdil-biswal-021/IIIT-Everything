import React from 'react';
// import styles from "./index.module.css";

import About from '../../components/aboutDiv/About';
import { ReactComponent as LeftSpine } from '../../svg/leftSpine.svg';
import { ReactComponent as SpikeHead } from '../../svg/spikehead.svg';

export default function BrowseResourcePage() {
  return (
    <>
      <div className="ml-64  ">
        <SpikeHead className="absolute  z-[-1] right-40 top-20 scale-[190%] pointer-events-none opacity-30 " />
      </div>
      <LeftSpine className="absolute md:block hidden pointer-events-none" />
      <About />
    </>
  );
}
