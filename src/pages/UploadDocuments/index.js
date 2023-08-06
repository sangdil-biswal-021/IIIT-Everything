import React from 'react';
// import TrialInput from '../../components/TrialInputs';
import ImageBox from '../../components/imageBox';
// import styles from "./index.module.css";

import DropBox from '../../components/dropBox';
import { ReactComponent as LeftSpine } from '../../svg/leftSpine.svg';
// import { ReactComponent as SpikeHead } from '../../svg/spikehead.svg';

export default function UploadDoc() {
  const para = 'This page is solely for admins and Editors with access.';
  return (
    <>
      <div className="ml-64  ">
        {/* <SpikeHead className="absolute z-[-1] right-40 top-10 scale-[190%] pointer-events-none opacity-30" /> */}
      </div>
      <LeftSpine className="absolute pointer-events-none" />

      {/* <div className=""> BrowseResourcePage</div> */}
      <ImageBox HeadTxt={'Upload Documents'} paraTxt={para} />
      {/* <TrialInput /> */}
      <DropBox />
    </>
  );
}
