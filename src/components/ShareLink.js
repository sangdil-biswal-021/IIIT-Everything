import React from 'react';
import ShareButton from '../svg/ShareButton';

const ShareLinkComponent = ({link}) => {
  const handleShareClick = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Share Link',
          url: link
        });
        console.log('Link shared successfully');
      } catch (error) {
        console.error('Error sharing link:', error);
      }
    } else {
      console.log('Web Share API not supported');
    }
  };

  return (
    <button onClick={handleShareClick}><ShareButton/></button>
  );
};

export default ShareLinkComponent;
