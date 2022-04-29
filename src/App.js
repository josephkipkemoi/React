import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Route Components
import LandingPage from './Modules/LandingPage/LandingPage';
import HOCPage from './Modules/HOCPage/HOCPage';
import Header from './Commons/Header/Header';

function App() {
  
  const isAuthenticated = 0;

  return (
    <>
     <Router>
          { isAuthenticated === 0
            ?  <Header/> 
            : <h1>Log out</h1>}
         
          <Routes>
            <Route exact path="/" element={<LandingPage/>} />
            <Route path='/HOC' element={<HOCPage/>}/> 
          </Routes>     
     </Router>
    </>
  );
}

export default App;
