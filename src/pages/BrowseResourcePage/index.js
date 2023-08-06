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
        <SpikeHead className="absolute z-[-1] right-40 top-10 scale-[190%] pointer-events-none opacity-30" />
      </div>
      <LeftSpine className="absolute" />

      {/* <div className=""> BrowseResourcePage</div> */}
      <ImageBox HeadTxt={'Browse Documents'} paraTxt={para} />
      <TrialInput />
    </>
  );
}
