import React from 'react';
import ShareLinkComponent from '../../components/ShareLink';
import TrialInput from '../../components/TrialInputs';
import ImageBox from '../../components/imageBox';
// import styles from "./index.module.css";

export default function BrowseResourcePage() {
  return (
    <>
      {/* <div className=""> BrowseResourcePage</div> */}
      <ImageBox />
      <TrialInput />
      <ShareLinkComponent />
    </>
  );
}
