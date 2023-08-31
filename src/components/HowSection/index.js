import { motion } from 'framer-motion';
import React from 'react';
import { InView } from 'react-intersection-observer';
import { ReactComponent as ArrowLong } from '../../svg/ArrowLong.svg';
import './index.module.css';

const How = () => {
  return (
    <div className=" flex lg:flex-row flex-col max-w-[95vw] mt-32 mb-4  ">
      <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8 ">
        <InView triggerOnce>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, transform: 'translateX(-10%)' }}
              animate={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateX(0)' : 'translateX(-10%)',
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-4xl text-white font-bold">HOW TO USE</h1>
            </motion.div>
          )}
        </InView>
        <InView triggerOnce>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, transform: 'translateX(-10%)' }}
              animate={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateX(0)' : 'translateX(10%)',
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-center pointer-events-none  text-white font-thin font-mono text-4xl">
                THE WEBSITE
                <div
                  // className={styles.animation}
                  className="ml-8 lg:block hidden"
                >
                  <ArrowLong />
                </div>
              </div>
            </motion.div>
          )}
        </InView>
      </div>
      <div className="lg:w-1/2 lg:h-1/2 lg:text-left text-center p-4 lg:mb-0 -mb-20  w-[100vw] items-center   text-white font-mono ">
        <InView triggerOnce>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, transform: 'translateX(-10%)' }}
              animate={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(-10%)',
              }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <p className="w-auto sm:mr-12">
                {' '}
                Lorem ipsum dolor sit amet consectetur. Velit integer turpis
                ornare diam. Lacus non congue ipsum hac neque. Bibendum commodo
                tellus ipsum sem amet facilisi. Duis ipsum sit et sit commodo
                fames vehicula. Ornare viverra sed sit risus nullam maecenas
                volutpat. Sit odio sed scelerisque amet mi convallis vulputate.
                Sem mattis eget aliquam est. Lorem ipsum dolor sit amet
                consectetur. Velit integer turpis ornare diam. Lacus non congue
                ipsum hac neque. Bibendum commodo tellus ipsum sem amet
                facilisi. Duis ipsum sit et sit commodo fames vehicula. Ornare
                viverra sed sit risus nullam maecenas volutpat. Sit odio sed
                scelerisque amet mi convallis vulputate. Sem mattis eget aliquam
                est.
              </p>
            </motion.div>
          )}
        </InView>
      </div>
    </div>
  );
};

export default How;
