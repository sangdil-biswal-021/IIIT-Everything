import React from 'react';
import TrialInput from '../../components/TrialInputs';
import ImageBox from '../../components/imageBox';
// import styles from "./index.module.css";

import { ReactComponent as LeftSpine } from '../../svg/leftSpine.svg';
import { ReactComponent as SpikeHead } from '../../svg/spikehead.svg';

export default function BrowseResourcePage() {
  const para = 'Here you will get all the Notes, PYQs and Books.';
  return (
    <>
      <div className="ml-64  ">
        <SpikeHead className="absolute z-[-1] sm:right-40 right-10 sm:top-10 top-0 sm:scale-[190%] scale-[1.2] pointer-events-none opacity-30" />
      </div>
      <LeftSpine className="absolute hidden sm:block" />

      {/* <div className=""> BrowseResourcePage</div> */}
      <ImageBox HeadTxt={'Browse Documents'} paraTxt={para} />
      <TrialInput />
    </>
  );
}
