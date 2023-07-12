import React, { useRef, useState } from 'react';
import { ReactComponent as Cloud } from '../../svg/uploadIcon.svg';

const DropBox = () => {
  const [files, setFiles] = useState(null);
  const inputRef = useRef();

  const handleDrag = (e) => {
    e.preventDefault();
  };
  const handleDrop = (e) => {
    e.preventDefault();
    setFiles(e.dataTransfer.files);
    console.log(e);
  };

  if (files)
    return (
      <div className="text-center ">
        <ul className="">
          {Array.from(files).map((file, idx) => (
            <li
              key={idx}
              className="p-2 m-4 mx-8 sm:mx-32 md:mx-60  bg-customPurple rounded-2xl"
            >
              {file.name}
            </li>
          ))}
        </ul>
      </div>
    );

  return (
    <>
      <div className="">
        <div
          className=" h-[70vh]  mx-16 md:mx-32 flex  radialGrade flex-col justify-center items-center border-0 rounded-3xl  text-xl"
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <Cloud />
          <h1 className=" cursor-default text-white"> Drag & Drop</h1>
          <h1 className=" cursor-default text-white">Or</h1>
          <input
            type="file"
            multiple
            onChange={(event) => setFiles(event.target.files)}
            hidden
            ref={inputRef}
          ></input>
          <button
            className="text-txtPurple  bg-gradient-to-r hover:bg-gradient-to-l from-customPurple to-customIndigo  px-4 py-2  rounded-3xl text-sm   font-bold transition duration-900 text-center"
            onClick={() => inputRef.current.click()}
          >
            Select Files
          </button>
        </div>
      </div>
    </>
  );
};

export default DropBox;
