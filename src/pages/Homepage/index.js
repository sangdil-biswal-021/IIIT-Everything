import React from 'react';
// import styles from "./index.module.css";
import How from '../../components/HowSection';
import Hero from '../../components/hero';
import { ReactComponent as LeftSpine } from '../../svg/leftSpine.svg';
import { ReactComponent as L1 } from '../../svg/lottieSpine1.svg';
import { ReactComponent as L2 } from '../../svg/lottieSpine2.svg';
import { ReactComponent as L3 } from '../../svg/lottieSpine3.svg';

export default function HomePage() {
  // const [isVisible, setIsVisible] = useState(false);
  // useEffect(() => {
  //   setIsVisible(true); // Set isVisible to true to trigger the animation
  // }, []);
  return (
    <>
      <div className="ml-64  ">
        {/* L1 position to be changed when lottie is added */}
        <L1 className="absolute z-[-1] right-0 pointer-events-none " />

        <L2 className="absolute z-[-1] right-32 top-0 pointer-events-none" />
        <L3 className="absolute z-[-1] right-0 translate-y-60 pointer-events-none" />
      </div>
      <LeftSpine className="absolute" />
      <Hero />
      <How />
    </>
  );
}
