import React from 'react';
import TrialInput from '../../components/TrialInputs';
import ImageBox from '../../components/imageBox';
// import styles from "./index.module.css";

import { ReactComponent as LeftSpine } from '../../svg/leftSpine.svg';
import { ReactComponent as SpikeHead } from '../../svg/spikehead.svg';
import About from '../../components/aboutDiv/About';

export default function BrowseResourcePage() {
  return (
    <>
      <div className="ml-64  ">
        <SpikeHead className="absolute z-[-1] right-40 top-10 scale-[190%] pointer-events-none opacity-30" />
      </div>
      <LeftSpine className="absolute" />
    <About/>
    </>
  );
}
