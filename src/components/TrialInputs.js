import React, { useContext } from 'react';
import { Context } from '../context/ContextProvider';
import img from '../images/radial-rectangle.png';
import Download from '../svg/Download';
import Line from '../svg/Line';
import ShareLinkComponent from './ShareLink';
import './generalStyles.module.css';
const SelectInput = ({ label, options, value, onChange }) => (
  <div className=" bg-transparent w-[560px] flex flex-col">
    <label
      className="block text-white  font-mono md:text-[14px] text-xs ml-2 mb-1 p-1"
      htmlFor={label}
    >
      {label}
    </label>
    <select
      className=" bg-[#302c42]/80 focus:outline-none w-[80vw] md:w-full h-[50px] text-white text-[14px] border border-white flex  md:items-center md:justify-center rounded-[40px] text-center "
      id={label}
      value={value}
      onChange={onChange}
    >
      <option value="">ALL</option>

      {options.map((option, index) => (
        <option key={index} value={option} className="hover:bg-black">
          {option}
        </option>
      ))}
    </select>
  </div>
);

const TrialInput = () => {
  const {
    subjects,
    documentType,
    setDocumentType,
    subject,
    setSubject,
    results,
  } = useContext(Context);
  const optionsDocumentType = [
    'NOTES',
    'BOOK',
    'PAPER',
    // Add more options as needed
  ];
  console.log(results);
  const handleDocumentTypeChange = (event) => {
    setDocumentType(event.target.value);
  };
  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center overflow-x-hidden">
      <div className="mx-10 mb-10 md:mb-0 ">
        <form className="h-[187px] w-[90vw] md:w-[90vw] bg-transparent flex md:flex-row flex-col  md:justify-between mx-2 px-2  items-start md:items-center">
          <SelectInput
            label="Select Document Type"
            options={optionsDocumentType}
            value={documentType}
            onChange={handleDocumentTypeChange}
          />

          <div className="w-4 h-12"></div>
          <SelectInput
            label="Select Subject"
            options={subjects}
            value={subject}
            onChange={handleSubjectChange}
          />
        </form>
      </div>
      <div
        className="h-[130vh] md:w-[80vw] w-[98vw] p-2  bg-cover object-center bg-no-repeat rounded-[100px] text-white flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="md:text-[26px] text-xl font-bold p-3">Results</div>
        <Line />
        <div className="md:text-[26px] text-xl font-thin p-2">
          Get your Documents Below
        </div>
        {results.length === 0 ? (
          <h1 className="text-[26px] font-thin p-2">No documents Available</h1>
        ) : (
          <></>
        )}

        <div className="flex flex-col h-full overflow-y-scroll no-scrollbar w-full ">
          {results.map((result) => (
            <div className="flex md:justify-between justify-center">
              <div className="flex md:flex-row flex-col rounded-[40px] border border-white w-full justify-between  items-center h-auto my-6 mx-20 p-10">
                <div className="flex flex-col h-full justify-center p-1 md:leading-[40px] md:items-start items-center md:text-[15px] text-xs font-thin font-mono">
                  <text className=" ">Name of the File: {result.filename}</text>
                  <text>Subject of the File: {result.sub} </text>
                  <text>Uploaded By: {result.uploader}</text>
                  <text className=" ">Uploaded On: {result.upload_date}</text>
                </div>
                <div className="flex flex-col md:mt-0 mt-4">
                  <button>
                    <a
                      href={`https://dbiiit.swoyam.engineer/download/${result._id}`}
                    >
                      <Download />
                    </a>
                  </button>
                  <ShareLinkComponent
                    link={`https://dbiiit.swoyam.engineer/download/${result._id}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrialInput;
