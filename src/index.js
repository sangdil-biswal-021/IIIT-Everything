import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { ContextProvider } from './context/ContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
  <React.StrictMode>
    <BrowserRouter> 
    <App />
    </BrowserRouter>
   
  </React.StrictMode>
  </ContextProvider>
);
