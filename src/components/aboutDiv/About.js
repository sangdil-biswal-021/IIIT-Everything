import React from 'react';
import anirudh from '../../images/anirudh.jpeg';
import img from '../../images/buildingsIIIT.png';
import kaniskaa from '../../images/kaniskaa.jpeg';
import sangdil from '../../images/sangdil.jpeg';
import swoyam from '../../images/swoyam.jpeg';
import vector from '../../images/vector.png';
import { ReactComponent as Arrow } from '../../svg/ArrowLong.svg';
import { ReactComponent as Image } from '../../svg/about.svg';
import { ReactComponent as ArrowRight } from '../../svg/rightArrow.svg';

import Developers from './Developers';

export default function About() {
  const data = [
    {
      image: anirudh,
      name: 'Anirudh Parida',
      about:
        'Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.',
      linkedin: 'https://www.linkedin.com/in/anirudh-parida',
    },
    {
      image: kaniskaa,
      name: 'Kaniskaa Behera',
      about: 'about',
      linkedin: 'https://www.linkedin.com/in/kaniskaa-behera-b30b53145',
    },
    {
      image: img,
      name: 'Prince Pious Omm Prakash',
      about: 'about',
      linkedin: 'https://www.linkedin.com/in/prince03/',
    },
    {
      image: sangdil,
      name: 'Sangdil Biswal',
      about: 'about',
      linkedin: 'https://www.linkedin.com/in/sangdil-biswal-bb1ba2263',
    },
    {
      image: swoyam,
      name: 'Swoyam Siddharth Nayak',
      about: 'about',
      linkedin: 'https://www.linkedin.com/in/swoyam2609',
    },
  ];
  const contributors = [
    'Lorem ipsum dolor sit',
    'Lorem ipsum dolor sit ',
    'Lorem ipsum dolor sit ',
    'Lorem ipsum dolor sit ',
    'Lorem ipsum dolor sit ',
    'Lorem ipsum dolor sit ',
  ];
  return (
    <>
      <div className="flex justify-center w-[90vw] flex-col items-center md:mt-8 ml-[5vw] overflow-x-hidden ">
        <div className="flex flex-col-reverse md:flex-row mb-10 md:mb-0 items-center">
          <div className="md:w-[50vw] w-[90vw]  flex flex-col md:p-5 md:m-5 md:mt-20 text-mono text-white text-center md:text-left overflow-x-hidden">
            <text className="font-bold text-[30px]">ABOUT</text>
            <text className="font-thin text-[30px]">THE CREATORS</text>
            <text className="text-[14px] mt-2 leading-7">
            Welcome to IIIT Everything, your ultimate resource hub for all things related to studying at our esteemed institution. Our dedicated team of creators has painstakingly compiled a comprehensive collection of study materials, including question papers, recommended books, and insightful notes, all crafted with the aim of aiding both juniors and peers in their academic pursuits. We understand the value of easy access to such documents in enhancing the learning experience, and thus, we are committed to providing a platform that fosters collaborative learning and knowledge sharing. Explore our repository to empower your educational journey and make the most out of your time here at IIIT Bhubaneswar.
            </text>
          </div>
          <div className=" lg:scale-[.8] scale-[.6] flex justify-center md:-mt-8 overflow-x-hidden">
            <Image />
          </div>
        </div>
        <div
          className="flex flex-col font-mono text-white mx-10 bg-no-repeat bg-contain "
          style={{ backgroundImage: `url(${vector})` }}
        >
          <div className="flex flex-col  w-[80vw] text-[30px]   text-center md:text-left">
            <text className="md:-mb-[30px]  font-thin">THE</text>
            <text className="md:flex items-center mr-2 font-bold ">
              DEVELOPERS
              <div className="ml-10 md:block hidden">
                <Arrow />
              </div>
            </text>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-2 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
            {data.map((e) => (
              <>
                <Developers
                  image={e.image}
                  name={e.name}
                  about={e.about}
                  linkedin={e.linkedin}
                />
              </>
            ))}
          </div>
        </div>
        <div className="flex flex-col font-mono text-white mx-10 mt-5">
          <div className="flex flex-col text-center md:text-left text-[30px]">
            <text className="md:-mb-[30px] font-thin">THE</text>
            <text className="md:flex items-center mr-2 font-bold">
              CONTRIBUTORS
              <div className="ml-10 md:block hidden">
                <Arrow />
              </div>
            </text>
          </div>
          <div className="mt-10 grid md:grid-cols-4 sm:grid-cols-2 gap-4 ">
            {contributors.map((e) => (
              <div className="flex flex-wrap items-center">
                <div>
                  <ArrowRight />
                </div>
                <text>{e}</text>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
