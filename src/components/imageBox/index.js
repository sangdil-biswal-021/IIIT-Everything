import React, { useRef } from 'react';
import buildingImg from '../../images/buildingsIIIT.png';
import { ReactComponent as DownArrow } from '../../svg/arrowDown.svg';
import './imageBox.css';

const ImageBox = (props) => {
  const scrollRef = useRef();
  const { HeadTxt, paraTxt } = props;

  const handleButtonClick = () => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <div className="flex justify-center items-center mt-8">
        <div
          className="image-box w-[90vw]  rounded-full sm:h-[300px] h-[200px]  relative bg-cover bg-center bg-no-repeat "
          style={{ backgroundImage: `url(${buildingImg})` }}
        >
          <div class="absolute inset-0 transform transition-transform duration-300 hover:scale-">
            {/* <img src={buildingImg} alt="Image" className="image rounded-full" /> */}
            <div className="  sm:h-[300px] h-[200px]  flex flex-col items-center justify-center ">
              <div className="text-white font-bold text-2xl sm:text-3xl md:text-5xl p-1">
                {HeadTxt}
              </div>
              <div className="text-white text-xs sm:text-xl md:text-3xl font-thin p-1 text-center">
                {paraTxt}
              </div>
            </div>
            <div className=" darkei w-[80px] h-[80px] left-[50%] bottom-[-30px] translate-x-[-50%]  absolute rounded-[50%]  cursor-pointer flex items-center justify-center">
              <button
                className="scroll-button bg-gradient-to-r hover:bg-gradient-to-l from-customPurple to-customIndigo"
                onClick={handleButtonClick}
              >
                <DownArrow />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div ref={scrollRef} className=" pt-20 "></div>
    </>
  );
};

export default ImageBox;
