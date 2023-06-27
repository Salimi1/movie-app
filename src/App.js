import { Route, Routes, Navigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
//Components
import Footer from './components/Footer';
import Navbar from '../src/shared/Navbar'
import Home from './components/Home'
import MovieDetails from './components/MovieDetails';
import Shows from './components/Shows';
import Characters from './components/Characters';
import ActorDetailsPage from './components/ActorDetailsPage';
//Context
import MovieContextProvider from './context/MovieContextProvider';
import ShowContextProvider from './context/ShowContextProvider';
import TrndFilmsContextProvider from './context/TrendFilmsContextProvider';
import TrendShowsContextProvider from './context/TrendShowsContextProvider';
function App() {
  const [navbarValue, setNavbarValue] = useState('')

  const handleNavbarChange = (newValue) => {
    setNavbarValue(newValue)
  };
  return (
    <div className="App">
      <Navbar onChange={handleNavbarChange}/>
      <MovieContextProvider>
        <ShowContextProvider>
          <TrndFilmsContextProvider>
            <TrendShowsContextProvider>
              <Routes>
                <Route path='*' element={<Navigate to='/home'/>} />
                <Route path='/home' element={<Home navbarValue={navbarValue}/>}/>
                <Route path='/shows/:genreId' element={<Shows navbarValue={navbarValue}/>}/>
                <Route path='/:movieOrTv/details/:id' element={<MovieDetails/>}/>
                <Route path='/:type/:id/characters' element={<Characters/>}/>
                <Route path='/person/:id/details' element={<ActorDetailsPage/>}/>
              </Routes>
              <Footer/>
            </TrendShowsContextProvider>
          </TrndFilmsContextProvider>
        </ShowContextProvider>
      </MovieContextProvider>
    </div>
  );
}

export default App;
