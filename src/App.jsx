import React, { lazy, Suspense } from 'react';
import * as Sentry from '@sentry/react';
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Route Page Components
import Header from './Commons/Header/Header';
import ReactPage from './Modules/ReactPage/ReactPage';
import LaravelPage from './Modules/LaravelPage/LaravelPage';
import RTKQuery from './Modules/RTKQuery/RTKQuery';
import Pokemon from './Modules/RTKQuery/Pokemon/Pokemon';
import PokemonCharacterProfile from './Modules/RTKQuery/Pokemon/PokemonCharacterProfile/PokemonCharacterProfile';

const LandingPage = lazy(() => import('./Modules/LandingPage/LandingPage'));


function App() {
  
  const isAuthenticated = 0;

  return (
    <>
     <Router>
          { isAuthenticated === 0
            ?  <Header/> 
            : <h1>Log out</h1>}
          <Suspense fallback={<h1>Loading</h1>}>
            <Routes>
              <Route exact path="/" element={<LandingPage/>} />
              <Route path='/react' element={<ReactPage/>}/> 
              <Route path='/laravel' element={<LaravelPage/>}/> 
              <Route path='/RTKQuery' element={<RTKQuery/>}/>
              <Route path='/Pokemon/:pokemon_category' element={<Pokemon/>}/>
              <Route path='/Pokemon/:pokemon_category/:pokemon_name' element={<PokemonCharacterProfile/>}/>
            </Routes>  
          </Suspense>            
     </Router>
    </>
  );
}

export default Sentry.withProfiler(App);
