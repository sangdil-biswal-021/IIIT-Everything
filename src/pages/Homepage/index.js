import React from 'react';
// import styles from "./index.module.css";
import Hero from '../../components/hero';
import How from '../../components/HowSection';

export default function HomePage() {
  // const [isVisible, setIsVisible] = useState(false);
  // useEffect(() => {
  //   setIsVisible(true); // Set isVisible to true to trigger the animation
  // }, []);
  return (
    <>
      <Hero />
      <How />
    </>
  );
}
