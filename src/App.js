import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import TrialInput from './components/TrialInputs';
import Footer from './components/footer';
import NavBar from './components/navbar';
import LoadingSpinner from './components/spinner/LoadingSpinner';
import BrowseResourcePage from './pages/BrowseResourcePage';
import HomePage from './pages/Homepage';
import UploadDoc from './pages/UploadDocuments';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/browse" element={<BrowseResourcePage />} />
            <Route path="/upload" element={<UploadDoc />} />
            <Route path="/trial" element={<TrialInput />} />
          </Routes>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
