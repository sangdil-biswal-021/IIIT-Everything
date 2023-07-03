import './App.css';
import NavBar from './components/navbar';
import HomePage from './pages/Homepage';
import BrowseResourcePage from './pages/BrowseResourcePage';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <NavBar />
      <HomePage/>
      {/* <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<BrowseResourcePage />} />
      </Routes> */}
    </>
  );
}

export default App;
