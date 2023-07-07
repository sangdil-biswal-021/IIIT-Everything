import React, { useRef } from 'react';
import buildingImg from '../../images/buildingsIIIT.png';
import { ReactComponent as DownArrow } from '../../svg/arrowDown.svg';
import './imageBox.css';

const ImageBox = () => {
  const scrollRef = useRef();

  const handleButtonClick = () => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <div
          className="image-box w-[90vw]  rounded-full h-[300px] relative bg-cover bg-center bg-no-repeat "
          style={{ backgroundImage: `url(${buildingImg})` }}
        >
          <div class="absolute inset-0 transform transition-transform duration-300 hover:scale-">
            {/* <img src={buildingImg} alt="Image" className="image rounded-full" /> */}
            <div className="  h-[300px]  flex flex-col items-center justify-center ">
              <div className="text-white font-bold text-5xl p-1">
                BROWSE DOCUMENTS
              </div>
              <div className="text-white text-3xl font-thin p-1">
                Here you will get all the Notes, PYQs and Books.
              </div>
            </div>
            <div className="w-[70px] h-[70px] left-[50%] bottom-[-30px] translate-x-[-50%] absolute rounded-[50%] bg-slate-400 cursor-pointer flex items-center justify-center">
              <button className="scroll-button " onClick={handleButtonClick}>
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
