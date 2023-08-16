import axios from 'axios';
import React, { useState } from 'react';
import ImageBox from '../../components/imageBox';
import { ReactComponent as Lottie2 } from '../../images/uploadpagelottie.svg';
import { ReactComponent as Arrow } from '../../svg/ArrowLong.svg';
import './index.module.css';
import styles from './index.module.css';

import DropBox from '../../components/dropBox';
import { ReactComponent as LeftSpine } from '../../svg/leftSpine.svg';
// import { ReactComponent as SpikeHead } from '../../svg/spikehead.svg';

export default function UploadDoc() {
  const para = 'This page is solely for admins and Editors with access.';

  //here to edit ................................................................................................................

  const [file, setFile] = useState(null);
  const [subject, setSubject] = useState('');
  const [docType, setDocType] = useState('NOTES');
  const [newAdminId, setNewAdminId] = useState('');
  const [newAdminPassword, setNewAdminPassword] = useState('');
  const [newAdminName, setNewAdminName] = useState('');
  const [masterPassword, setMasterPassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [isEditorModalOpen, setIsEditorModalOpen] = useState(false); // Added state for editor modal
  const [adminId, setAdminId] = useState(''); // Added state for admin ID
  const [adminPass, setAdminPass] = useState('');
  const [editorId, setEditorId] = useState(''); // Added state for editor ID
  const [editorPass, setEditorPass] = useState('');
  const [editorName, setEditorName] = useState('');
  const [showVerifyModal, setShowVerifyModal] = useState(false);

  const handleAddEditor = () => {
    setIsEditorModalOpen(true);
  };

  const handleEditorModalClose = () => {
    setIsEditorModalOpen(false);
    setResponseMessage('');
  };

  const handleEditorSubmit = async () => {
    try {
      const checkResponse = await axios.get(
        'https://dbiiit.swoyam.engineer/checkadmin',
        {
          params: {
            id: adminId,
            password: adminPass,
          },
        }
      );

      if (checkResponse.data === true) {
        const payload = {
          name: editorName,
          studentid: parseInt(editorId),
          password: editorPass,
          adder: adminId,
        };

        const response = await axios.post(
          'https://dbiiit.swoyam.engineer/addeditor',
          payload,
          {
            params: {
              adder: adminId,
            },
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        setResponseMessage('User Added Successfully');
      } else {
        setResponseMessage('Invalid Admin ID or Password');
      }
    } catch (error) {
      console.error(error);
    }
  };

  // const handleFileUpload = (event) => {
  //   const uploadedFile = event.target.files[0];
  //   setFile(uploadedFile);
  // };

  const handleSubjectChange = (event) => {
    const subjectValue = event.target.value;
    setSubject(subjectValue);
  };

  const handleDocTypeChange = (event) => {
    const docTypeValue = event.target.value;
    setDocType(docTypeValue);
  };

  const handleNewAdminIdChange = (event) => {
    setNewAdminId(event.target.value);
  };

  const handleNewAdminPasswordChange = (event) => {
    setNewAdminPassword(event.target.value);
  };

  const handleNewAdminNameChange = (event) => {
    setNewAdminName(event.target.value);
  };

  const handleMasterPasswordChange = (event) => {
    setMasterPassword(event.target.value);
  };

  const handleEditorIdChange = (event) => {
    setEditorId(event.target.value);
  };

  const handleEditorPassChange = (event) => {
    setEditorPass(event.target.value);
  };

  const handleEditorNameChange = (event) => {
    setEditorName(event.target.value);
  };

  const handleAdminIdChange = (event) => {
    setAdminId(event.target.value);
  };

  const handleAdminPassChange = (event) => {
    setAdminPass(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const payload = {
        name: newAdminName,
        studentid: parseInt(newAdminId),
        password: newAdminPassword,
        adder: 121065,
      };

      const response = await axios.post(
        'https://dbiiit.swoyam.engineer/addadmin',
        payload,
        {
          params: {
            masterpass: masterPassword,
          },
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      setResponseMessage(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddAdmin = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setResponseMessage('');
  };

  const handleFileUploadVerify = async () => {
    try {
      const checkResponse = await axios.get(
        'https://dbiiit.swoyam.engineer/checkeditor',
        {
          params: {
            id: editorId,
            password: editorPass,
          },
        }
      );

      if (checkResponse.data === true) {
        const formData = new FormData();
        formData.append('file', file);
        console.log(formData);

        const queryParams = {
          sub: subject,
          docType: docType,
          uploader: editorId,
        };

        const response = await axios.post(
          'https://dbiiit.swoyam.engineer/upload',
          formData,
          {
            params: queryParams,
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );

        // Handle the response as needed
        setResponseMessage('File Uploaded Successfully');
      } else {
        setResponseMessage('Invalid Editor ID or Password');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpload = async () => {
    setShowVerifyModal(true);

    console.log(file.name);
    console.log(showVerifyModal);

    console.log(file);
  };
  const handleUploadClose = async () => {
    setShowVerifyModal(false);
  };

  // here to edit..............................................................................................................................

  return (
    <>
      <div className="ml-64  ">
        {/* <SpikeHead className="absolute z-[-1] right-40 top-10 scale-[190%] pointer-events-none opacity-30" /> */}
      </div>
      <LeftSpine className="absolute pointer-events-none" />

      {/* <div className=""> BrowseResourcePage</div> */}
      <ImageBox HeadTxt={'Upload Documents'} paraTxt={para} />
      {/* <TrialInput /> */}
      <DropBox setFiles={setFile} files={file} />

      <section className="mt-16 p-8 m-4 flex flex-col items-center">
        <div className="flex gap-4 sm:gap-8 md:gap-16 lg:gap-32 w-[80vw] justify-between ">
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={handleSubjectChange}
            className=" border-white border-2 bg-[#302c42]  p-4 mb-2 w-[40vw] rounded-3xl "
          />
          <select
            value={docType}
            onChange={handleDocTypeChange}
            className="border-2 p-4 border-white  bg-[#302c42] text-gray-400  mb-2 w-[40vw]  rounded-3xl   "
          >
            <option value="NOTES">NOTES</option>
            <option value="PAPER">PAPER</option>
            <option value="BOOK">BOOK</option>
          </select>
        </div>
        <button
          onClick={handleUpload}
          disabled={!file}
          className="text-txtPurple  bg-gradient-to-r hover:bg-gradient-to-l  from-customPurple mt-16 to-customIndigo  px-4 py-4  rounded-3xl text-sm   font-bold transition duration-900 text-center w-64  "
          style={{
            opacity: file ? 1 : 0.5,
            cursor: !file ? 'not-allowed' : 'pointer',
          }}
        >
          Upload
        </button>
      </section>

      <section className="sm:mb-8 -mb-24 flex justify-between w-[100v]  md:pt-16 md:px-32 px-4 pr-72 overflow-hidden">
        <div className="flex flex-col  sm:w-auto w-[60vw]">
          <div className="flex md:flex-row flex-col gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl text-white font-light">
                MANAGE
              </h1>
              <h1 className="text-4xl md:text-5xl text-white font-bold">
                ADMIN
              </h1>
            </div>
            <div
              className={`md:${styles.animation} ${styles.animationSm}   md:scale-100 scale-50`}
            >
              <Arrow className=" md:scale-100 scale-50 sm:ml-0 -ml-12" />
            </div>
          </div>
          <Lottie2 className="md:scale-100 scale-75 md:ml-0 -ml-10  " />
        </div>
        <div className="flex flex-col  gap-8 mt-8 ">
          <button
            className="text-txtPurple  bg-gradient-to-r hover:bg-gradient-to-l from-customPurple to-customIndigo px-4 sm:px-24   py-4  rounded-3xl  text-xs lg:text-base   font-bold transition duration-900 text-center whitespace-nowrap"
            onClick={handleAddAdmin}
          >
            ADD ADMIN
          </button>
          <button
            className="text-txtPurple  bg-gradient-to-r hover:bg-gradient-to-l from-customPurple to-customIndigo px-4 sm:px-24 py-4  rounded-3xl lg:text-base text-xs  font-bold transition duration-900 text-center whitespace-nowrap"
            onClick={handleAddEditor}
          >
            ADD EDITOR
          </button>
        </div>
      </section>

      {/* Add Admin modal */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full  flex  items-center justify-center bg-gray-500 bg-opacity-50 z-20">
          <div className="bg-[#302c42] p-4 rounded-3xl m-4">
            <h2 className="text-xl text-gray-300 font-bold mb-2 text-center">
              Add Admin
            </h2>
            <div className="flex flex-wrap gap-2 items-center justify-center">
              <input
                type="text"
                placeholder="ID"
                value={newAdminId}
                onChange={handleNewAdminIdChange}
                className="border border-gray-400 p-2 mb-2 rounded-3xl bg-slate-200 "
              />
              <input
                type="password"
                placeholder="Password"
                value={newAdminPassword}
                onChange={handleNewAdminPasswordChange}
                className="border border-gray-400 p-2 mb-2 rounded-3xl bg-slate-200 "
              />
              <input
                type="text"
                placeholder="Name"
                value={newAdminName}
                onChange={handleNewAdminNameChange}
                className="border border-gray-400 p-2 mb-2 rounded-3xl bg-slate-200 "
              />
              <input
                type="password"
                placeholder="Master Password"
                value={masterPassword}
                onChange={handleMasterPasswordChange}
                className="border border-gray-400 p-2 mb-2 rounded-3xl bg-slate-200 text-gray-900"
              />
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded-3xl"
                onClick={handleSubmit}
              >
                Submit
              </button>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-3xl"
                onClick={handleModalClose}
              >
                Close
              </button>
            </div>
            {responseMessage && (
              <p className="text-red-500 font-bold">{responseMessage}</p>
            )}
          </div>
        </div>
      )}

      {/* Add Editor Modal */}
      {isEditorModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50 z-20">
          <div className="bg-white p-4 rounded">
            <h2 className="text-xl font-bold mb-2">Add Editor</h2>
            <input
              type="text"
              placeholder="Editor ID"
              value={editorId}
              onChange={handleEditorIdChange}
              className="border border-gray-400 p-2 mb-2"
            />
            <input
              type="password"
              placeholder="Editor Password"
              value={editorPass}
              onChange={handleEditorPassChange}
              className="border border-gray-400 p-2 mb-2"
            />
            <input
              type="text"
              placeholder="Editor Name"
              value={editorName}
              onChange={handleEditorNameChange}
              className="border border-gray-400 p-2 mb-2"
            />
            <input
              type="text"
              placeholder="Admin ID"
              value={adminId}
              onChange={handleAdminIdChange}
              className="border border-gray-400 p-2 mb-2"
            />
            <input
              type="password"
              placeholder="Admin Password"
              value={adminPass}
              onChange={handleAdminPassChange}
              className="border border-gray-400 p-2 mb-2"
            />
            {/* ... */}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleEditorSubmit}
            >
              Submit
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleEditorModalClose}
            >
              Close
            </button>
            {responseMessage && (
              <p className="text-red-500 font-bold">{responseMessage}</p>
            )}
          </div>
        </div>
      )}

      {/* Verify Editor Modal */}
      {showVerifyModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-4 rounded">
            <h2 className="text-xl font-bold mb-2">Verify Editor</h2>
            <input
              type="text"
              placeholder="Editor ID"
              value={editorId}
              onChange={handleEditorIdChange}
              className="border border-gray-400 p-2 mb-2"
            />
            <input
              type="password"
              placeholder="Editor Password"
              value={editorPass}
              onChange={handleEditorPassChange}
              className="border border-gray-400 p-2 mb-2"
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleFileUploadVerify}
            >
              Submit
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleUploadClose}
            >
              Close
            </button>
            {responseMessage && (
              <p className="text-red-500 font-bold">{responseMessage}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
