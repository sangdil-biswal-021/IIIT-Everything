import React from 'react';

// import styles from "./index.module.css";
import How from '../../components/HowSection';
import Hero from '../../components/hero';
import { ReactComponent as LeftSpine } from '../../svg/leftSpine.svg';
import { ReactComponent as SpikeHead } from '../../svg/spikehead.svg';

export default function HomePage() {
  // const [isVisible, setIsVisible] = useState(false);
  // useEffect(() => {
  //   setIsVisible(true); // Set isVisible to true to trigger the animation
  // }, []);
  return (
    <>
      <div className="ml-64  ">
        <SpikeHead className="absolute z-[-1] right-48 top-30 scale-[190%] pointer-events-none opacity-80" />
      </div>
      <LeftSpine className="absolute" />
      <Hero />
      <How />
    </>
  );
}
