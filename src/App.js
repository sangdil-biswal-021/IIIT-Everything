import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar';
import LoadingSpinner from './components/spinner/LoadingSpinner';
import BrowseResourcePage from './pages/BrowseResourcePage';
import HomePage from './pages/Homepage';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <NavBar />
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/browse" element={<BrowseResourcePage />} />
            </Routes>
          </Router>
        </div>
      )}
    </>
  );
}

export default App;
