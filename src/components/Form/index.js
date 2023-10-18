import axios from 'axios';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the form data to Getform
      await axios.post(
        'https://getform.io/f/3d74e27b-899e-4747-8f8f-720420b8ce64',
        formData
      );

      // Display a success message or redirect to a thank you page
      console.log('Message sent successfully!');
      toast.success('Message sent successfully!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeButton: false,
        className: 'small-toast bg-purple text-white',
        bodyClassName: 'text-sm',
      });
    } catch (error) {
      // Handle errors here
      console.error('Error sending message:', error);
    }
  };

  return (
    <>
      <motion.form
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
        className="bg-transparent p-4 rounded-md shadow-md text-white md:px-48"
      >
        <h2 className="text-2xl font-bold mb-4 text-purple">Contact Us</h2>
        <div className="mb-4 flex flex-wrap -mx-2 ">
          <div className="w-1/2 px-2">
            <label htmlFor="name" className="block mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 pb-1 border-b border-purple transition duration-300 border-opacity-5 focus:outline-none focus:border-opacity-100 bg-transparent"
            />
          </div>
          <div className="w-1/2 px-2">
            <label htmlFor="email" className="block mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 pb-1 border-b border-purple transition duration-300 focus:outline-none focus:border-opacity-75  bg-transparent "
            />
          </div>
        </div>
        <div className="mb-4 relative">
          <label htmlFor="message" className="block mb-2">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 pb-1 border-b border-purple transition duration-300 focus:outline-none focus:border-opacity-75  bg-transparent"
            rows="4"
          />
        </div>
        <div className="w-full flex items-center justify-center">
          {' '}
          <button
            type="submit"
            className="text-txtPurple bg-gradient-to-r hover:bg-gradient-to-l from-customPurple to-customIndigo  px-40 py-4  rounded-3xl text-md   font-bold transition duration-900 text-center"
          >
            Submit
          </button>
        </div>
      </motion.form>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        closeButton={false}
        className="small-toast"
        bodyClassName="text-sm"
      />
    </>
  );
};

export default ContactForm;
